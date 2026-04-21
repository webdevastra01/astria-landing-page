import { useState } from "react";
import "../styles/ServicesSection.css";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/insurance-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit quote request");
      }
    } catch (error) {
      console.error("Quote submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-heart-icon lucide-heart"
        >
          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
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
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-hospital-icon lucide-hospital"
        >
          <path d="M12 7v4" />
          <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
          <path d="M14 9h-4" />
          <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
          <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
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
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-ambulance-icon lucide-ambulance"
        >
          <path d="M10 10H6" />
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
          <path d="M8 8v4" />
          <path d="M9 18h6" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
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
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-car-icon lucide-car"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
      title: "Vehicle Insurance",
      description:
        "Comprehensive coverage and CTPL protection for your vehicle with free renewal processing and fast service.",
      features: ["CTPL included", "Free renewal", "Fast claims"],
      color: "#3b82f6",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-house-icon lucide-house"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
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
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-building2-icon lucide-building-2"
        >
          <path d="M10 12h4" />
          <path d="M10 8h4" />
          <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
          <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
          <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
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

              {/* <div className="service-action">
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
              </div> */}

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
        submitLabel={isSubmitting ? "Submitting..." : "Request Insurance Quote"}
      />
    </section>
  );
};

export default ServicesSection;
