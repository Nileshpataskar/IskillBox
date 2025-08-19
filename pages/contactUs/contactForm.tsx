"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <section className="flex justify-center py-12 px-2">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center text-sm">We’d love to hear from you. Fill out the form and we’ll get back to you soon.</p>
        <form onSubmit={handleSubmit} className="grid gap-7" aria-label="Contact form">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="border border-gray-200 bg-white/70 rounded-xl px-4 py-3 w-full focus:border-lime-400 focus:ring-2 focus:ring-lime-100 focus:outline-none transition shadow-sm placeholder-gray-400"
              required
              aria-label="Full Name"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="border border-gray-200 bg-white/70 rounded-xl px-4 py-3 w-full focus:border-lime-400 focus:ring-2 focus:ring-lime-100 focus:outline-none transition shadow-sm placeholder-gray-400"
              required
              aria-label="Email"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone No."
              className="border border-gray-200 bg-white/70 rounded-xl px-4 py-3 w-full focus:border-lime-400 focus:ring-2 focus:ring-lime-100 focus:outline-none transition shadow-sm placeholder-gray-400"
              aria-label="Phone Number"
            />
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder="Company Name"
              className="border border-gray-200 bg-white/70 rounded-xl px-4 py-3 w-full focus:border-lime-400 focus:ring-2 focus:ring-lime-100 focus:outline-none transition shadow-sm placeholder-gray-400"
              aria-label="Company Name"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Message"
            rows={4}
            className="border border-gray-200 bg-white/70 rounded-xl px-4 py-3 w-full focus:border-lime-400 focus:ring-2 focus:ring-lime-100 focus:outline-none transition shadow-sm placeholder-gray-400"
            required
            aria-label="Message"
          />
          <div className="text-center mt-2">
            <button
              type="submit"
              className="bg-[#161c2d] hover:bg-[#161c2d]/10 text-white font-semibold px-10 py-3 rounded-xl shadow-lg transition border-0 focus:outline-none focus:ring-2 focus:ring-lime-300 text-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
