import { useState } from "react";
import "../styles/FinalCTA.css";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (formData: any) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Quote request submitted:", formData);
    // Handle success (toast, redirect, etc.)
  };

  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta-wrapper">
          {/* Decorative background elements */}
          <div className="final-cta-glow"></div>

          <div className="final-cta-content">
            <span className="section-label">Take Action Today</span>

            <h2 className="final-cta-title">
              Secure Your Financial Future Before{" "}
              <span className="gradient-text">Life's Unexpected Events</span>{" "}
              Happen
            </h2>

            <p className="final-cta-lead">
              The best time to build protection is before you need it.
            </p>

            <p className="final-cta-description">
              Astria Insurance Solutions helps you create a complete protection
              strategy so your family, assets, and income remain secure.
            </p>

            <div className="final-cta-action">
              <button
                className="btn btn-primary btn-lg final-cta-button"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
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
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Start Your Free Protection Review
              </button>

              <p className="final-cta-trust">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Free • No Obligation • Expert Guidance
              </p>
            </div>
          </div>

          {/* Visual accent */}
          <div className="final-cta-visual">
            <div className="shield-animation">
              <div className="shield-ring shield-ring-1"></div>
              <div className="shield-ring shield-ring-2"></div>
              <div className="shield-ring shield-ring-3"></div>
              <div className="shield-core">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>
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

export default FinalCTA;
