import { useState } from "react";
import { Paperclip, Send } from "lucide-react";

function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const MAX_FILE_SIZE = 15 * 1024 * 1024;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    setError("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Please select a file smaller than 15 MB.");
      setSelectedFile(null);
      event.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(false);

    // Backend integration will be added later.
    console.log("Career application:", {
      ...formData,
      file: selectedFile,
    });

    setSubmitted(true);
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
          className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950"
        />
      </div>

      {/* CONTACT ROW */}
      <div className="grid gap-5 sm:grid-cols-2">
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
            className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950"
          />
        </div>

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
            className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950"
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
          className="w-full appearance-none border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950"
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
          className="w-full resize-none border border-slate-300 bg-white px-4 py-3.5 text-sm leading-6 text-navy-950 outline-none transition focus:border-navy-950"
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
          onChange={handleFileChange}
          className="sr-only"
        />

        <label
          htmlFor="career-document"
          className="flex cursor-pointer items-center justify-between border border-dashed border-slate-300 px-4 py-4 transition hover:border-navy-950 hover:bg-slate-50"
        >
          <span className="flex items-center gap-3 text-sm font-semibold text-navy-950">
            <Paperclip size={18} />

            {selectedFile
              ? selectedFile.name
              : "Attach CV / Document"}
          </span>

          <span className="shrink-0 text-xs text-slate-500">
            Max 15 MB
          </span>
        </label>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          You may attach your CV, resume or another relevant professional
          document.
        </p>

        {error && (
          <p className="mt-3 text-sm font-medium text-red-600">
            {error}
          </p>
        )}
      </div>

      {/* SUCCESS MESSAGE */}
      {submitted && (
        <div className="border border-green-200 bg-green-50 px-4 py-4 text-sm leading-6 text-green-700">
          Thank you for sharing your profile. Your application has been
          recorded successfully.
        </div>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-3 bg-navy-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-navy-900"
      >
        Submit Application

        <Send
          size={17}
          aria-hidden="true"
        />
      </button>
    </form>
  );
}

export default CareerForm;