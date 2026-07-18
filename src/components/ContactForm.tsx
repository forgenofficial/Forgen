"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const services = [
  "Web Design & Development",
  "Digital Marketing",
  "SEO Optimization",
  "Content Creation",
  "Business Consulting",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Build WhatsApp message
    const lines = [
      `👋 New message from Forgen website`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      form.company ? `*Company:* ${form.company}` : null,
      form.service ? `*Service:* ${form.service}` : null,
      ``,
      `*Message:*`,
      form.message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const waUrl = `https://wa.me/918921008004?text=${encodeURIComponent(lines)}`;

    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    window.open(waUrl, "_blank");
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-20 px-8 bg-[#f8f8f5] rounded-[24px] border border-zinc-100 text-center">
        <div className="w-16 h-16 rounded-full bg-[#1e3a8a] flex items-center justify-center">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.4rem] font-extrabold text-black tracking-tight">
            Message sent!
          </h3>
          <p className="text-[0.95rem] font-medium text-zinc-500 leading-relaxed max-w-sm">
            Thanks for reaching out, {form.name.split(" ")[0]}. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
          className="text-[0.85rem] font-semibold text-zinc-400 hover:text-black transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6 bg-[#f8f8f5] rounded-[24px] border border-zinc-100 p-8 md:p-10"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-[1.3rem] font-extrabold text-black tracking-tight">Send us a message</h2>
        <p className="text-[0.88rem] font-medium text-zinc-400 tracking-tight">
          Fill in the details below and we&apos;ll be in touch shortly.
        </p>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Full name"
          required
          error={errors.name}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Brooklyn Simmons"
            className={inputCls(!!errors.name)}
          />
        </Field>
        <Field label="Email address" required error={errors.email}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="brooklyn@company.com"
            className={inputCls(!!errors.email)}
          />
        </Field>
      </div>

      {/* Company */}
      <Field label="Company / Organisation">
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Inc. (optional)"
          className={inputCls(false)}
        />
      </Field>

      {/* Service */}
      <Field label="Service needed">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputCls(false) + " cursor-pointer"}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field label="Your message" required error={errors.message}>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, and timeline..."
          rows={5}
          className={inputCls(!!errors.message) + " resize-none"}
        />
      </Field>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-3 w-full py-4 bg-black text-white rounded-full text-[0.92rem] font-semibold tracking-wide hover:bg-zinc-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 group"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send message
            <svg className="w-4 h-4 group-hover:translate-x-[3px] transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}

// Helpers
function inputCls(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-[0.92rem] font-medium text-black placeholder:text-zinc-300 bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-black/10 focus:border-black ${
    hasError ? "border-red-400 focus:ring-red-100 focus:border-red-400" : "border-zinc-200 hover:border-zinc-300"
  }`;
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.82rem] font-bold text-zinc-600 tracking-tight">
        {label}
        {required && <span className="text-red-500 ml-0.5 font-bold">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-[0.78rem] font-medium text-red-500 tracking-tight">{error}</p>
      )}
    </div>
  );
}
