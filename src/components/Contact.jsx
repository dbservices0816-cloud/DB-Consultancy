import React, { useState } from "react";
import toast from "react-hot-toast"; // 🔥 ADD THIS

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service) {
      toast.error("Please fill required fields"); // 🔥 REPLACED alert
      return;
    }

    toast.success("Your request has been submitted!"); // 🔥 REPLACED alert

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-white to-blue-50">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Request a Cost Audit, Valuation, or Strategic Consultation.
        </p>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <h2 className="text-2xl font-semibold mb-4">
            Send an Inquiry
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Service *</option>
            <option>Fractional CFO</option>
            <option>Asset Valuation</option>
            <option>Project Audit</option>
            <option>Cost Optimization</option>
            <option>M&A Advisory</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition">
            Submit Request
          </button>
        </form>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Contact Information
          </h2>

          <p className="text-gray-600 mb-4">
            Serving clients globally with a base in the New Delhi / Noida / Gurugram region.
          </p>

          <div className="space-y-3 text-gray-700 text-sm">
            <p><strong>Email:</strong>dbservices0816@gmail.com</p>
            <p><strong>Phone:</strong> 
+91 90132 03030</p>
            <p><strong>Office:</strong> New Delhi </p>
          </div>

          <div className="mt-8 w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Map Coming Soon</span>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white text-center py-16 px-6">
        <h3 className="text-2xl font-serif mb-4">
          Let’s Build Financial Clarity Together
        </h3>

        <p className="text-blue-200 mb-6">
          Connect with our experts for tailored advisory solutions.
        </p>

        <button className="bg-white text-blue-900 px-8 py-3 rounded-xl hover:bg-gray-200 transition">
          Schedule Consultation
        </button>
      </section>

    </div>
  );
};

export default Contact;






