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
    <section className="bg-[#EAF4FF] py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className=" border  rounded-xl px-4 py-2 w-full"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className=" border  rounded-xl px-4 py-2 w-full"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone No."
              className=" border  rounded-xl px-4 py-2 w-full"
            />
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder="Company Name"
              className=" border  rounded-xl px-4 py-2 w-full"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Message"
            rows={4}
            className=" border  rounded-xl px-4 py-2 w-full"
            required
          />

          <div className="text-center">
            <button
              type="submit"
              className="border-2 border-black px-6 py-2 rounded-xl hover:bg-black hover:text-white transition"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
