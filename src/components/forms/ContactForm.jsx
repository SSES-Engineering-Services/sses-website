import { useState } from "react";
import { supabase } from "../../lib/supabase";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("SUBMIT CLICKED");

    setStatus({
      type: "",
      message: "",
    });

    setIsSubmitting(true);

    try {
      const submission = {
        name: formData.name.trim(),
        contact_number: formData.phone.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      console.log("Sending contact inquiry:", submission);

      /*
       * 1. Save the enquiry to Supabase.
       */
      const { error } = await supabase
        .from("contact_submissions")
        .insert(submission);

      if (error) {
        console.error("Supabase submission error:", error);
        throw error;
      }

      console.log("Contact inquiry saved to Supabase.");

      /*
       * 2. Send the enquiry to Google Apps Script.
       *
       * Apps Script will then send the notification
       * through Resend to the SSES company email.
       */
      const appsScriptUrl =
        import.meta.env.VITE_GOOGLE_DRIVE_UPLOAD_URL;

      if (!appsScriptUrl) {
        throw new Error(
          "Missing VITE_GOOGLE_DRIVE_UPLOAD_URL environment variable.",
        );
      }

      const emailResponse = await fetch(appsScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          type: "contact",
          name: submission.name,
          contactNumber: submission.contact_number,
          email: submission.email,
          message: submission.message,
        }),
      });

      const emailResult = await emailResponse.json();

      console.log(
        "Contact email notification response:",
        emailResult,
      );

      if (!emailResult.success) {
        console.error(
          "Contact email notification failed:",
          emailResult,
        );

        /*
         * The enquiry is already safely stored in Supabase.
         * Do not tell the visitor that their enquiry failed.
         */
        console.warn(
          "Contact enquiry was saved, but the email notification could not be sent.",
        );
      }

      /*
       * 3. Reset the form after the enquiry has been saved.
       */
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setStatus({
        type: "success",
        message:
          "Your inquiry has been submitted successfully. We will get back to you soon.",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setStatus({
        type: "error",
        message:
          "We could not submit your inquiry right now. Please try again.",
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
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Your Name
        </label>

        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          disabled={isSubmitting}
          className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950 disabled:cursor-not-allowed disabled:bg-slate-50"
        />
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Contact Number
        </label>

        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your contact number"
          required
          disabled={isSubmitting}
          className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950 disabled:cursor-not-allowed disabled:bg-slate-50"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Email Address
        </label>

        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
          disabled={isSubmitting}
          className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950 disabled:cursor-not-allowed disabled:bg-slate-50"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Your Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements"
          rows={5}
          required
          disabled={isSubmitting}
          className="w-full resize-none border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950 disabled:cursor-not-allowed disabled:bg-slate-50"
        />
      </div>

      {status.message && (
        <div
          role="status"
          className={`border px-4 py-3 text-sm font-medium ${
            status.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 bg-navy-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}

        {!isSubmitting && (
          <span aria-hidden="true">→</span>
        )}
      </button>
    </form>
  );
}

export default ContactForm;

