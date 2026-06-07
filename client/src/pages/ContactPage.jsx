import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdArrowOutward, MdContentCopy, MdCheck } from "react-icons/md";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deepsahil.online@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="w-full bg-zinc-200 font-neue text-zinc-800 pb-20 overflow-hidden">
      {/* Page Header */}
      <div className="mb-15 pt-[5rem] md:pt-[7rem] border-b pb-10 border-zinc-400">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-founders uppercase text-7xl md:text-8xl leading-none px-6 md:px-10"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-zinc-600 mt-4 text-lg md:text-xl px-6 md:px-10"
        >
          Have an idea, project, or collaboration in mind? Drop a message below or reach out directly.
        </motion.p>
      </div>

      <div className="px-6 md:px-10 mt-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
          {/* Contact Form Container (8 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-100/60 backdrop-blur-md border border-zinc-300/80 rounded-2xl p-6 md:p-10 shadow-sm">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name Input */}
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="name" className="text-sm font-semibold uppercase text-zinc-500 tracking-wider">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-white border-2 rounded-xl py-3 px-4 outline-none transition-all ${
                          formErrors.name ? "border-red-400 focus:border-red-500" : "border-zinc-300 focus:border-zinc-800"
                        }`}
                        placeholder="John Doe"
                      />
                      {formErrors.name && (
                        <span className="text-red-500 text-xs mt-1 font-medium">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="email" className="text-sm font-semibold uppercase text-zinc-500 tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-white border-2 rounded-xl py-3 px-4 outline-none transition-all ${
                          formErrors.email ? "border-red-400 focus:border-red-500" : "border-zinc-300 focus:border-zinc-800"
                        }`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && (
                        <span className="text-red-500 text-xs mt-1 font-medium">{formErrors.email}</span>
                      )}
                    </div>

                    {/* Subject Input */}
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="subject" className="text-sm font-semibold uppercase text-zinc-500 tracking-wider">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-white border-2 border-zinc-300 rounded-xl py-3 px-4 outline-none focus:border-zinc-800 transition-all"
                        placeholder="Project Inquiry / Say Hello"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="message" className="text-sm font-semibold uppercase text-zinc-500 tracking-wider">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full bg-white border-2 rounded-xl py-3 px-4 outline-none transition-all resize-none ${
                          formErrors.message ? "border-red-400 focus:border-red-500" : "border-zinc-300 focus:border-zinc-800"
                        }`}
                        placeholder="Tell me about your project, goals, or questions..."
                      />
                      {formErrors.message && (
                        <span className="text-red-500 text-xs mt-1 font-medium">{formErrors.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative overflow-hidden bg-zinc-900 text-zinc-100 rounded-xl py-4 font-semibold uppercase tracking-wider hover:bg-zinc-950 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-3 border-zinc-400 border-t-zinc-100 rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <MdArrowOutward className="text-lg group-hover:rotate-45 duration-300 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl shadow-sm border border-emerald-200">
                      <MdCheck />
                    </div>
                    <h2 className="text-2xl font-semibold text-zinc-900">Message Sent Successfully!</h2>
                    <p className="max-w-md text-zinc-500">
                      Thank you for reaching out, Sahil will get back to you as soon as possible (usually within 24 hours).
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-950 text-zinc-100 rounded-xl text-sm font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Details / Social Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              {/* Direct Info */}
              <div className="space-y-4">
                <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider block">Direct Contact</span>
                <div className="flex items-center gap-3 bg-zinc-100/60 border border-zinc-300/80 rounded-2xl p-4 shadow-sm group">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-400 uppercase font-semibold mb-0.5">Email</p>
                    <a
                      href="mailto:deepsahil.online@gmail.com"
                      className="text-lg md:text-xl font-semibold text-zinc-900 hover:text-zinc-600 transition-colors break-all"
                    >
                      deepsahil.online@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-white border border-zinc-300 text-zinc-500 hover:text-zinc-800 hover:border-zinc-400 transition-colors shadow-sm focus:outline-none cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copied ? <MdCheck className="text-emerald-600 text-lg" /> : <MdContentCopy className="text-lg" />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider block">Based In</span>
                <p className="text-xl font-bold text-zinc-800 font-neue">Punjab, India 🇮🇳</p>
                <p className="text-sm text-zinc-500">Open for freelance opportunities and collaborations worldwide.</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <span className="text-zinc-500 text-sm font-semibold uppercase tracking-wider block">Connect Online</span>
              <div className="flex flex-col gap-3">
                {/* Github Link */}
                <a
                  href="https://github.com/deepsahilz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-zinc-100/60 border border-zinc-300/80 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-800 rounded-2xl p-4 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="text-2xl text-zinc-500 group-hover:text-zinc-100 transition-colors" />
                    <span className="font-semibold">GitHub</span>
                  </div>
                  <MdArrowOutward className="text-xl text-zinc-400 group-hover:text-zinc-100 group-hover:rotate-45 transition-all duration-300" />
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/sahil-singh-0421b7275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-zinc-100/60 border border-zinc-300/80 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-800 rounded-2xl p-4 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FaLinkedin className="text-2xl text-zinc-500 group-hover:text-zinc-100 transition-colors" />
                    <span className="font-semibold">LinkedIn</span>
                  </div>
                  <MdArrowOutward className="text-xl text-zinc-400 group-hover:text-zinc-100 group-hover:rotate-45 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
