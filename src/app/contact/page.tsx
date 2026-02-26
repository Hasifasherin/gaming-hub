"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false); // ✅ Modal state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validation
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.message
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (!form.privacy) {
      setError("You must accept the Privacy Policy.");
      return;
    }

    setError("");

    // ✅ Show modal instead of window.confirm
    setShowModal(true);
  };

  const handleSend = () => {
    const phoneNumber = "919876543210"; // 🔥 Replace with your number

    const text = `
New Contact Message 🎮

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
    setShowModal(false);
  };

  return (
    <div className="pt-28 pb-20 text-white min-h-screen relative">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          How can we help?
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-10 border border-blue-500/30 rounded-2xl p-10 bg-gradient-to-b from-blue-950/20 to-transparent"
        >
          {/* Names */}
          <div className="grid md:grid-cols-2 gap-10">
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3"
            />

            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3"
            />
          </div>

          {/* Contact */}
          <div className="grid md:grid-cols-2 gap-10">
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3"
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 resize-none"
          />

          {/* Privacy */}
          <div className="flex items-center gap-3">
            <input
              name="privacy"
              type="checkbox"
              onChange={handleChange}
              className="accent-blue-500"
            />
            <p className="text-sm text-gray-400">I accept the Privacy Policy</p>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-12 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Custom Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full text-center space-y-6">
            <h2 className="text-2xl font-bold">Confirm Message</h2>
            <p className="text-gray-300">
              Are you sure you want to send this message via WhatsApp?
            </p>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}