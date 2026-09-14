import { useState } from "react";
import { Paperclip, Send } from "lucide-react";
import { supabase } from "../../lib/supabase";

const MAX_FILE_SIZE = 15 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setStatus({
      type: "",
      message: "",
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    setStatus({
      type: "",
      message: "",
    });

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const fileExtension = `.${file.name
      .split(".")
      .pop()
      ?.toLowerCase()}`;

    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
      setSelectedFile(null);
      event.target.value = "";

      setStatus({
        type: "error",
        message: "Please upload a PDF, DOC or DOCX file.",
      });

      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setSelectedFile(null);
      event.target.value = "";

      setStatus({
        type: "error",
        message: "The selected file type is not supported.",
      });

      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setSelectedFile(null);
      event.target.value = "";

      setStatus({
        type: "error",
        message: "Please select a file smaller than 15 MB.",
      });

      return;
    }

    setSelectedFile(file);
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const result = reader.result;

          if (typeof result !== "string") {
            reject(
              new Error("Unable to read the selected file."),
            );
            return;
          }

          const base64Data = result.split(",")[1];

          if (!base64Data) {
            reject(
              new Error("Unable to process the selected file."),
            );
            return;
          }

          resolve(base64Data);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => {
        reject(
          new Error("Unable to read the selected file."),
        );
      };

      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Career form submit started.");

    setStatus({
      type: "",
      message: "",
    });

    if (!selectedFile) {
      console.log("No CV selected.");

      setStatus({
        type: "error",
        message:
          "Please attach your CV or professional document.",
      });

      return;
    }

    const googleDriveUploadUrl =
      import.meta.env.VITE_GOOGLE_DRIVE_UPLOAD_URL;

    console.log(
      "Google Drive Upload URL:",
      googleDriveUploadUrl,
    );

    if (!googleDriveUploadUrl) {
      console.error(
        "Missing VITE_GOOGLE_DRIVE_UPLOAD_URL environment variable.",
      );

      setStatus({
        type: "error",
        message:
          "The application service is not configured correctly. Please try again later.",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      console.log(
        "Starting career application submission...",
      );

      /*
       * Convert CV to Base64.
       */
      console.log(
        "Preparing CV for Google Drive upload...",
      );

      const fileData =
        await convertFileToBase64(selectedFile);

      console.log(
        "CV prepared successfully.",
        {
          fileName: selectedFile.name,
          fileSize: selectedFile.size,
          mimeType: selectedFile.type,
          base64Length: fileData.length,
        },
      );

      /*
       * Send CV + applicant details to Google Apps Script.
       *
       * The Apps Script will:
       * 1. Save the CV to Google Drive.
       * 2. Give the company email access to the CV.
       * 3. Send the application notification through Resend.
       */
      console.log(
        "Uploading CV and submitting application...",
      );

      const driveResponse = await fetch(
        googleDriveUploadUrl,
        {
          method: "POST",
          redirect: "follow",

          /*
           * text/plain prevents the browser from
           * triggering a CORS preflight request.
           */
          headers: {
            "Content-Type":
              "text/plain;charset=utf-8",
          },

          body: JSON.stringify({
            type: "career",

            name:
              formData.name.trim(),

            email:
              formData.email.trim(),

            phone:
              formData.phone.trim(),

            expertise:
              formData.expertise.trim(),

            message:
              formData.message.trim(),

            fileName:
              selectedFile.name,

            mimeType:
              selectedFile.type,

            fileData,
          }),
        },
      );

      console.log(
        "Google Apps Script response received.",
        {
          status: driveResponse.status,
          ok: driveResponse.ok,
        },
      );

      if (!driveResponse.ok) {
        throw new Error(
          `Application submission failed with HTTP status ${driveResponse.status}.`,
        );
      }

      /*
       * Read the response as text first.
       */
      const responseText =
        await driveResponse.text();

      console.log(
        "Google Apps Script response:",
        responseText,
      );

      /*
       * Convert response to JSON.
       */
      let driveResult;

      try {
        driveResult =
          JSON.parse(responseText);
      } catch {
        throw new Error(
          "Google Apps Script returned an unexpected response.",
        );
      }

      /*
       * Check whether the Apps Script operation
       * itself succeeded.
       */
      if (!driveResult.success) {
        throw new Error(
          driveResult.message ||
            "Application submission failed.",
        );
      }

      console.log(
        "Career application processed by Google Apps Script.",
      );

      console.log(
        "Google Drive file ID:",
        driveResult.fileId,
      );

      console.log(
        "Google Drive file name:",
        driveResult.fileName,
      );

      /*
       * The CV has already been saved to Drive.
       *
       * Apps Script also attempts to send the
       * notification email through Resend.
       */
      if (driveResult.emailSent) {
        console.log(
          "Career notification email sent successfully.",
          driveResult.emailId,
        );
      } else {
        console.warn(
          "Career notification email was not sent.",
        );
      }

      /*
       * Save structured application information
       * to Supabase.
       */
      console.log(
        "Saving application information to Supabase...",
      );

      const {
        error: databaseError,
      } = await supabase
        .from("career_applications")
        .insert({
          full_name:
            formData.name.trim(),

          email:
            formData.email.trim(),

          phone:
            formData.phone.trim(),

          position:
            formData.expertise.trim(),

          location:
            null,

          experience:
            formData.message.trim() ||
            null,

          linkedin:
            null,

          /*
           * Store the Google Drive file ID
           * rather than the actual CV.
           */
          cv_path:
            driveResult.fileId,

          cv_filename:
            driveResult.fileName ||
            selectedFile.name,

          cv_mime_type:
            selectedFile.type,

          cv_size:
            selectedFile.size,

          status:
            "new",
        });

      if (databaseError) {
        console.error(
          "Career application database error:",
          databaseError,
        );

        throw databaseError;
      }

      console.log(
        "Career application saved successfully to Supabase.",
      );

      /*
       * Reset form.
       */
      setFormData({
        name: "",
        email: "",
        phone: "",
        expertise: "",
        message: "",
      });

      setSelectedFile(null);

      /*
       * Reset file input.
       */
      const fileInput =
        document.getElementById(
          "career-document",
        );

      if (fileInput) {
        fileInput.value = "";
      }

      /*
       * Show success message.
       */
      setStatus({
        type: "success",
        message:
          "Thank you for sharing your profile. Your application has been recorded successfully.",
      });

    } catch (error) {
      console.error(
        "Career application submission failed:",
        error,
      );

      setStatus({
        type: "error",
        message:
          "We could not submit your application right now. Please try again.",
      });

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      {/* NAME */}
      <div>
        <label
          htmlFor="career-name"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Full Name
        </label>

        <input
          id="career-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          disabled={isSubmitting}
          className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950 disabled:cursor-not-allowed disabled:bg-slate-50"
        />
      </div>


      {/* CONTACT ROW */}
      <div className="grid gap-5 sm:grid-cols-2">

        {/* EMAIL */}
        <div>
          <label
            htmlFor="career-email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email Address
          </label>

          <input
            id="career-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            disabled={isSubmitting}
            className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950 disabled:cursor-not-allowed disabled:bg-slate-50"
          />
        </div>


        {/* PHONE */}
        <div>
          <label
            htmlFor="career-phone"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Contact Number
          </label>

          <input
            id="career-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your number"
            required
            disabled={isSubmitting}
            className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950 disabled:cursor-not-allowed disabled:bg-slate-50"
          />
        </div>

      </div>


      {/* EXPERTISE */}
      <div>
        <label
          htmlFor="career-expertise"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Area of Expertise
        </label>

        <select
          id="career-expertise"
          name="expertise"
          value={formData.expertise}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full appearance-none border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950 disabled:cursor-not-allowed disabled:bg-slate-50"
        >
          <option value="">
            Select your area
          </option>

          <option value="Engineering & Technical Services">
            Engineering & Technical Services
          </option>

          <option value="Safety, Health, Environment & Fire">
            Safety, Health, Environment & Fire
          </option>

          <option value="Industrial Operations & Projects">
            Industrial Operations & Projects
          </option>

          <option value="Training, Inspection & Auditing">
            Training, Inspection & Auditing
          </option>

          <option value="Manpower & Project Support">
            Manpower & Project Support
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </div>


      {/* MESSAGE */}
      <div>
        <label
          htmlFor="career-message"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Brief Introduction
        </label>

        <textarea
          id="career-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us briefly about your experience, qualifications or the type of opportunity you are looking for."
          rows={5}
          disabled={isSubmitting}
          className="w-full resize-none border border-slate-300 bg-white px-4 py-3.5 text-sm leading-6 text-navy-950 outline-none transition focus:border-navy-950 disabled:cursor-not-allowed disabled:bg-slate-50"
        />
      </div>


      {/* DOCUMENT */}
      <div>

        <p className="mb-2 text-sm font-semibold text-slate-700">
          CV / Professional Document
        </p>

        <input
          id="career-document"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileChange}
          disabled={isSubmitting}
          className="sr-only"
        />

        <label
          htmlFor="career-document"
          className={`flex items-center justify-between border border-dashed border-slate-300 px-4 py-4 transition ${
            isSubmitting
              ? "cursor-not-allowed bg-slate-50 opacity-70"
              : "cursor-pointer hover:border-navy-950 hover:bg-slate-50"
          }`}
        >

          <span className="flex min-w-0 items-center gap-3 text-sm font-semibold text-navy-950">

            <Paperclip
              size={18}
              className="shrink-0"
              aria-hidden="true"
            />

            <span className="truncate">
              {selectedFile
                ? selectedFile.name
                : "Attach CV / Document"}
            </span>

          </span>


          <span className="ml-4 shrink-0 text-xs text-slate-500">
            Max 15 MB
          </span>

        </label>


        <p className="mt-2 text-xs leading-5 text-slate-500">
          PDF, DOC or DOCX. Maximum file size: 15 MB.
        </p>

      </div>


      {/* STATUS */}
      {status.message && (
        <div
          role="status"
          className={`border px-4 py-4 text-sm font-medium leading-6 ${
            status.type === "success"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}


      {/* SUBMIT */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-3 bg-navy-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-70"
      >

        {isSubmitting
          ? "Submitting Application..."
          : "Submit Application"}

        {!isSubmitting && (
          <Send
            size={17}
            aria-hidden="true"
          />
        )}

      </button>

    </form>
  );
}

export default CareerForm;