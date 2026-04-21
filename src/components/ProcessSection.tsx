import { useState } from "react";
import "../styles/ProccessSection.css";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (formData: any) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Quote request submitted:", formData);
    // Handle success (toast, redirect, etc.)
  };

  const steps = [
    {
      title: "Protection Review",
      description:
        "We assess your financial risks, current coverage, and protection gaps to understand your unique situation.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Coverage Structuring",
      description:
        "We compare insurers and design a protection strategy tailored to your life stage, family, or business needs.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Long-Term Protection",
      description:
        "Your coverage is reviewed annually and adjusted as your life and financial responsibilities grow over time.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="m4.93 4.93 14.14 14.14" />
          <path d="m19.07 4.93-14.14 14.14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="how-it-works" id="process">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Process</span>
          <h2 className="section-title">
            A Simple 3-Step Protection Planning Process
          </h2>
          <p className="section-subtitle">
            Getting the right insurance shouldn't be complicated. We've
            streamlined our approach to give you clarity and confidence.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="step-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="step-number-wrapper">
                <div className="step-icon">{step.icon}</div>
              </div>

              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              <div className="step-arrow" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="section-footer">
          <button
            className="cta-button"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Start Your Protection Review
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <p className="cta-note">Free consultation • No obligation</p>
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

export default HowItWorks;
