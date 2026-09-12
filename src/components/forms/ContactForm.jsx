import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend integration will be added later.
    console.log("Contact inquiry:", formData);
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
          className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950"
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
          className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950"
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
          className="w-full border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950"
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
          className="w-full resize-none border border-slate-300 bg-white px-4 py-3.5 text-sm text-navy-950 outline-none transition focus:border-navy-950"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-navy-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-navy-900"
      >
        Send Inquiry
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

export default ContactForm;