import { useState } from "react";
import "../styles/LeadMagnet.css";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const LeadMagnet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (formData: any) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Quote request submitted:", formData);
    // Handle success (toast, redirect, etc.)
  };

  const benefits = [
    "Assessment of your current coverage",
    "Identification of financial risk exposure",
    "Comparison of insurance options",
    "Recommendations for structured protection",
  ];

  return (
    <section className="lead-magnet">
      <div className="container">
        <div className="lead-magnet-wrapper">
          {/* Left Content */}
          <div className="lead-magnet-content">
            <span className="section-label">Free Consultation</span>
            <h2 className="lead-magnet-title">
              Get Your Complimentary
              <br />
              <span className="gradient-text">Protection Review</span>
            </h2>

            <p className="lead-magnet-lead">
              Not sure if your insurance coverage is enough?
            </p>

            <p className="lead-magnet-description">
              Our free review helps you identify risks, coverage gaps, and
              smarter protection options tailored to your specific situation.
            </p>

            <div className="lead-magnet-includes">
              <h3 className="includes-title">
                Your Free Protection Review Includes
              </h3>
              <ul className="includes-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="includes-item">
                    <span className="includes-check">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lead-magnet-ctas">
              <button
                className="btn btn-primary btn-lg lead-magnet-primary-cta"
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
                Request Free Protection Review
              </button>
            </div>

            <p className="lead-magnet-guarantee">
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
              No obligation. No spam. Just expert guidance.
            </p>
          </div>

          {/* Right Visual */}
          <div className="lead-magnet-visual">
            <div className="visual-card">
              <div className="visual-card-header">
                <div className="visual-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="visual-label">Protection Review</span>
              </div>
              <div className="visual-card-body">
                <div className="visual-progress">
                  <div
                    className="visual-progress-bar"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="visual-rows">
                  <div className="visual-row">
                    <div className="visual-row-icon visual-row-success">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="visual-row-content">
                      <div
                        className="visual-row-line"
                        style={{ width: "80%" }}
                      ></div>
                      <div
                        className="visual-row-line-short"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="visual-row">
                    <div className="visual-row-icon visual-row-warning">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <line x1="12" x2="12" y1="9" y2="13" />
                        <line x1="12" x2="12.01" y1="17" y2="17" />
                      </svg>
                    </div>
                    <div className="visual-row-content">
                      <div
                        className="visual-row-line"
                        style={{ width: "65%" }}
                      ></div>
                      <div
                        className="visual-row-line-short"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="visual-row">
                    <div className="visual-row-icon visual-row-success">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="visual-row-content">
                      <div
                        className="visual-row-line"
                        style={{ width: "90%" }}
                      ></div>
                      <div
                        className="visual-row-line-short"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="visual-badge">
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
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                  3 Coverage Gaps Found
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="visual-float visual-float-1">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Secure
            </div>
            <div className="visual-float visual-float-2">
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
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Verified
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

export default LeadMagnet;
