import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions governing the use of Forgen's website and software development services.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://forgen.co/terms-of-service" },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using Forgen's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
      "We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our website following any changes constitutes your acceptance of the revised terms.",
    ],
  },
  {
    title: "2. Services Provided",
    content: [
      "Forgen provides digital services including but not limited to web design and development, digital marketing, SEO optimization, content creation, and business consulting. The scope of services for each engagement is defined in a separate project agreement or statement of work.",
      "We reserve the right to modify, suspend, or discontinue any part of our services at any time. We will not be liable to you or any third party for any modification, suspension, or discontinuation of services.",
    ],
  },
  {
    title: "3. Client Responsibilities",
    content: [
      "As a client, you agree to provide accurate, complete, and timely information required for the delivery of our services. You are responsible for obtaining any necessary rights, licenses, or permissions for materials you provide to us.",
      "You agree not to use our services for any unlawful purpose, to transmit harmful or offensive content, to infringe on intellectual property rights, or to interfere with the proper functioning of our systems.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "Upon full payment, clients receive ownership of the final deliverables created specifically for their project, unless otherwise agreed in writing. Forgen retains ownership of all preliminary concepts, working files, tools, frameworks, and proprietary methodologies used in the creation process.",
      "Forgen retains the right to display work completed for clients in our portfolio and marketing materials unless a written confidentiality agreement is in place. All content on our website — including text, graphics, logos, and code — is the property of Forgen and protected by applicable intellectual property laws.",
    ],
  },
  {
    title: "5. Payment Terms",
    content: [
      "Payment terms are outlined in individual project agreements. Unless otherwise specified, a deposit is required before work commences, with the remaining balance due upon project completion.",
      "Late payments may result in suspension of work. Forgen reserves the right to charge interest on overdue invoices at a rate of 1.5% per month. Clients are responsible for any costs incurred in collecting overdue payments.",
    ],
  },
  {
    title: "6. Confidentiality",
    content: [
      "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation continues for two years after the termination of the project unless otherwise agreed.",
      "Confidential information does not include information that is publicly available, independently developed, or disclosed with prior written consent.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, Forgen shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website, even if we have been advised of the possibility of such damages.",
      "Our total liability to you for any claims arising under these terms shall not exceed the total amount paid by you to Forgen in the three months preceding the claim.",
    ],
  },
  {
    title: "8. Warranties & Disclaimers",
    content: [
      "Our services are provided on an 'as is' and 'as available' basis. Forgen makes no warranties, expressed or implied, regarding the suitability, reliability, availability, or accuracy of our services for any purpose.",
      "We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that the site or its servers are free of viruses or harmful components.",
    ],
  },
  {
    title: "9. Termination",
    content: [
      "Either party may terminate a project engagement with written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date.",
      "Forgen reserves the right to terminate services immediately if a client violates these terms, engages in unlawful activity, or fails to make required payments.",
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.",
      "Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in San Francisco, California.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "If you have any questions about these Terms of Service, please contact us:",
    ],
    contact: {
      email: "forgenxofficial@gmail.com",
      phone: "+91 89210 08004",
      address: "123 Innovation St, San Francisco, CA",
    },
  },
];

export default function TermsOfServicePage() {
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Legal
          </div>
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-black tracking-tight leading-none">
            Terms of Service
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
            Please read these Terms of Service carefully before using Forgen&apos;s website or engaging our services.
            These terms establish the rules and guidelines for our relationship with clients and visitors.
            By using our site or services, you acknowledge that you have read, understood, and agree to be
            bound by these terms.
          </p>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4 py-8 border-t border-zinc-100">
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
