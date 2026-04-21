import { useState } from "react";
import "../styles/ServicesSection.css";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (formData: any) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Quote request submitted:", formData);
    // Handle success (toast, redirect, etc.)
  };

  const services = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" strokeOpacity="0.3" />
        </svg>
      ),
      title: "Life Insurance",
      description:
        "Secure your family's financial future with structured life coverage designed to protect income and long-term financial stability.",
      features: ["Income protection", "Family security", "Long-term stability"],
      color: "var(--primary)",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          <path d="M12 2v2m0 16v2M8 6h8" strokeOpacity="0.3" />
        </svg>
      ),
      title: "Health & Critical Illness Insurance",
      description:
        "Protect against the rising cost of medical care and critical illness treatments.",
      features: ["Medical coverage", "Critical illness", "Treatment costs"],
      color: "#10b981",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
        </svg>
      ),
      title: "Accident Insurance",
      description:
        "Coverage for individuals, families, and groups to protect against sudden accidents and disability.",
      features: ["24/7 coverage", "Disability protection", "Group options"],
      color: "#f59e0b",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 10l2-2m0 0l7-7 7 7M7 8v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          <path
            d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01M16 17h.01"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Motor Insurance",
      description:
        "Comprehensive coverage and CTPL protection for your vehicle with free renewal processing and fast service.",
      features: ["CTPL included", "Free renewal", "Fast claims"],
      color: "#3b82f6",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          <path d="M12 3v18M2 12h20" strokeOpacity="0.2" />
        </svg>
      ),
      title: "Property & Fire Insurance",
      description:
        "Protect homes, buildings, and valuable assets from fire, natural disasters, and unexpected damage.",
      features: ["Fire protection", "Natural disasters", "Asset coverage"],
      color: "#ef4444",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          <path d="M12 2v20M2 12h20" strokeOpacity="0.1" />
        </svg>
      ),
      title: "Business Insurance",
      description:
        "Coverage for assets, liability, employees, and income protection to keep your business secure during disruptions.",
      features: ["Asset protection", "Liability coverage", "Income security"],
      color: "#8b5cf6",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header services-header">
          <div className="services-badge">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span>Our Solutions</span>
          </div>
          <h2 className="section-title">Our Protection Solutions</h2>
          <p className="section-description">
            Comprehensive insurance options tailored to protect every aspect of
            your life and business
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${hoveredIndex === index ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={
                { "--service-color": service.color } as React.CSSProperties
              }
            >
              <div className="service-icon-wrapper">
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <div
                  className="service-icon-bg"
                  style={{ background: service.color }}
                ></div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <span key={fIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-action">
                <span className="learn-more">Learn more</span>
                <svg
                  className="arrow-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <div className="service-accent"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <p className="cta-text">Not sure which coverage you need?</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Free Consultation
          </button>
        </div>
      </div>
      <InsuranceQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default ServicesSection;
