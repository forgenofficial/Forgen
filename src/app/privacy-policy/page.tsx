import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Forgen collects, uses, and protects your personal information in compliance with privacy regulations.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://forgen.co/privacy-policy" },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via email. This may include your name, email address, phone number, company name, and any other details you choose to share.",
      "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited. This data is collected through cookies and similar tracking technologies.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect to respond to your inquiries, provide our services, and communicate with you about projects and updates.",
      "We may also use your information to improve our website and services, send you relevant marketing communications (with your consent), comply with legal obligations, and prevent fraudulent or unauthorized activity.",
    ],
  },
  {
    title: "3. Sharing Your Information",
    content: [
      "Forgen does not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and delivering our services, provided they agree to keep your information confidential.",
      "We may also disclose your information if required by law, to protect our rights, or in connection with a merger or acquisition of our business.",
    ],
  },
  {
    title: "4. Cookies & Tracking Technologies",
    content: [
      "Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. Cookies are small text files stored on your device.",
      "You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted).",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete your information; the right to restrict or object to processing; and the right to data portability.",
      "To exercise any of these rights, please contact us at forgenxofficial@gmail.com. We will respond to your request within 30 days.",
    ],
  },
  {
    title: "7. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately and we will take steps to delete it.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by updating the date at the top of this page. Your continued use of our website after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:",
    ],
    contact: {
      email: "forgenxofficial@gmail.com",
      phone: "+91 89210 08004",
      address: "123 Innovation St, San Francisco, CA",
    },
  },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 6, 2026";

  return (
    <div className="relative min-h-screen bg-white text-black font-sans">
      <Header />

      {/* Hero */}
      <section className="w-full bg-[#f8f8f5] border-b border-zinc-100">
        <div className="w-full max-w-[1360px] mx-auto px-6 md:px-16 py-16 md:py-24 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[0.82rem] font-bold text-zinc-500 tracking-wider uppercase">
            <svg
              className="w-4 h-4 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Legal
          </div>
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-black tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="text-[0.9rem] font-medium text-zinc-400 tracking-tight">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="w-full max-w-[1360px] mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-[780px] flex flex-col gap-2">

          {/* Intro */}
          <p className="text-[1rem] font-medium text-zinc-500 leading-[1.8] tracking-tight mb-10">
            At Forgen, your privacy matters to us. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or engage with our services. Please read
            this policy carefully. If you disagree with its terms, please discontinue use of our site.
          </p>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4 py-8 border-t border-zinc-100 first:border-t-0">
              <h2 className="text-[1.2rem] md:text-[1.35rem] font-extrabold text-black tracking-tight">
                {section.title}
              </h2>
              <div className="flex flex-col gap-3">
                {section.content.map((para, i) => (
                  <p key={i} className="text-[0.95rem] font-medium text-zinc-500 leading-[1.8] tracking-tight">
                    {para}
                  </p>
                ))}
                {section.contact && (
                  <div className="mt-3 flex flex-col gap-2 pl-4 border-l-2 border-[#1e3a8a]">
                    <p className="text-[0.95rem] font-semibold text-black tracking-tight">
                      Email:{" "}
                      <a
                        href={`mailto:${section.contact.email}`}
                        className="font-medium text-zinc-500 hover:text-black transition-colors"
                      >
                        {section.contact.email}
                      </a>
                    </p>
                    <p className="text-[0.95rem] font-semibold text-black tracking-tight">
                      Phone:{" "}
                      <span className="font-medium text-zinc-500">{section.contact.phone}</span>
                    </p>
                    <p className="text-[0.95rem] font-semibold text-black tracking-tight">
                      Address:{" "}
                      <span className="font-medium text-zinc-500">{section.contact.address}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </main>

      <Footer />
    </div>
  );
}
