import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import LogoMarquee from "@/components/LogoMarquee";
import AwardsSection from "@/components/AwardsSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  // ✅ Multiple JSON-LD schemas for rich results
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://forgen.co/#organization",
    name: "Forgen",
    url: "https://forgen.co",
    logo: {
      "@type": "ImageObject",
      url: "https://forgen.co/images/office_collaboration.png",
      width: 1200,
      height: 630,
    },
    image: "https://forgen.co/images/office_collaboration.png",
    telephone: "+918921008004",
    email: "forgenxofficial@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.2588",
      longitude: "75.7804",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+918921008004",
        contactType: "customer service",
        email: "forgenxofficial@gmail.com",
        availableLanguage: ["English", "Malayalam"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/forgen._",
    ],
    description:
      "Forgen is a premium software development company in Kerala specializing in web applications, mobile apps, UI/UX design, and custom software solutions.",
    foundingDate: "2024",
    areaServed: ["Kerala", "India", "Worldwide"],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "Custom web applications built with React, Next.js, and Node.js" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", description: "iOS and Android apps built with React Native and Flutter" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design", description: "User-centered design with Figma and modern design systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Solutions", description: "Complete e-commerce platforms that drive sales" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing", description: "Data-driven marketing strategies that grow your business" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance & Support", description: "Ongoing support and maintenance for your digital assets" } },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://forgen.co/#website",
    name: "Forgen",
    url: "https://forgen.co",
    description: "Premium Software Development Company in Kerala",
    publisher: { "@id": "https://forgen.co/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://forgen.co/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of software does Forgen build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Forgen builds web applications, mobile apps (iOS & Android), SaaS platforms, admin dashboards, e-commerce solutions, and custom enterprise software tailored to your business needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with startups or only established companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with everyone — from early-stage startups building their first MVP to established companies looking to scale or modernize their tech stack.",
        },
      },
      {
        "@type": "Question",
        name: "How do you estimate the cost of a project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project cost depends on the scope, complexity, and timeline. After an initial consultation, we provide a detailed proposal with a clear breakdown of deliverables and pricing.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with React, Next.js, Node.js, Python, React Native, Flutter, PostgreSQL, MongoDB, AWS, and Google Cloud — choosing the right tools based on your project needs.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a software product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A simple landing page or MVP can take 2–4 weeks. A full-featured web or mobile application typically takes 2–5 months. We agree on a clear timeline before development begins.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide support after the project is delivered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every project includes a support period post-launch. We also offer ongoing maintenance and enhancement packages so your software stays updated and performant.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://forgen.co",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="relative min-h-screen bg-white text-black font-sans">
        {/* Sticky navbar needs to be outside overflow-x-hidden */}
        <Header />

        {/* overflow-x-hidden only on content, not the sticky header */}
        <div className="overflow-x-hidden">
          {/* Background Grid Pattern */}
          <div className="grid-overlay" />

          <HeroSection />
          <AboutSection />
          <VisionSection />
          <LogoMarquee />
          <AwardsSection />
          <PricingSection />
          <ServicesSection />
          <TestimonialsSection />
          <FAQSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
