import { useState } from "react";
import "../styles/HeroSection.css";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const HeroSection = () => {
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

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
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
                className="lucide lucide-shield-check-icon lucide-shield-check"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Trusted Protection Planning</span>
            </div>

            <h1 className="hero-title">
              Protect What Matters Most —{" "}
              <span className="gradient-text">
                Your Income, Family, and Future
              </span>
            </h1>

            <p className="hero-description">
              Insurance shouldn't be confusing, overpriced, or incomplete.
              <strong> Astria Insurance Solutions</strong> helps individuals,
              families, and businesses build structured protection plans that
              safeguard income, assets, and long-term financial security.
            </p>

            <p className="hero-subdescription">
              We assess your risks, compare insurers, and design the right
              coverage so you're fully protected when life takes an unexpected
              turn.
            </p>

            <div className="hero-cta">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                Get Your Free Protection Review
                <svg
                  className="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="btn btn-secondary btn-lg">
                <svg
                  className="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                See How Protection Planning Works
              </button>
            </div>

            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <span>Structured insurance planning approach</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <span>
                  Multiple insurers compared for better coverage options
                </span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span>
                  Trusted by individuals, families, and business owners
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual - Protection Planning Dashboard */}
          <div className="hero-visual">
            <div className="dashboard-card">
              <div className="dashboard-header">
                <div className="dashboard-title">
                  <div className="dashboard-logo">
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
                      className="lucide lucide-shield-check-icon lucide-shield-check"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span>Protection Plan</span>
                </div>
                <div className="status-badge">Active</div>
              </div>

              <div className="protection-rings">
                <div className="ring ring-outer">
                  <div className="ring-label">Future Security</div>
                </div>
                <div className="ring ring-middle">
                  <div className="ring-label">Family</div>
                </div>
                <div className="ring ring-inner">
                  <div className="ring-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Income</span>
                  </div>
                </div>
              </div>

              <div className="coverage-metrics">
                <div className="metric">
                  <div className="metric-value">98%</div>
                  <div className="metric-label">Risk Coverage</div>
                </div>
                <div className="metric">
                  <div className="metric-value">12</div>
                  <div className="metric-label">Insurers Compared</div>
                </div>
                <div className="metric">
                  <div className="metric-value">24/7</div>
                  <div className="metric-label">Protection</div>
                </div>
              </div>

              <div className="coverage-bars">
                <div className="coverage-item">
                  <div className="coverage-info">
                    <span className="coverage-name">Income Protection</span>
                    <span className="coverage-percent">100%</span>
                  </div>
                  <div className="coverage-bar">
                    <div
                      className="coverage-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="coverage-item">
                  <div className="coverage-info">
                    <span className="coverage-name">Family Security</span>
                    <span className="coverage-percent">95%</span>
                  </div>
                  <div className="coverage-bar">
                    <div
                      className="coverage-fill"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div className="coverage-item">
                  <div className="coverage-info">
                    <span className="coverage-name">Asset Protection</span>
                    <span className="coverage-percent">90%</span>
                  </div>
                  <div className="coverage-bar">
                    <div
                      className="coverage-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="floating-card card-top">
              <div className="floating-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="floating-content">
                <div className="floating-title">Policy Optimized</div>
                <div className="floating-subtitle">Best rate secured</div>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <div className="floating-icon warning">
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
                  className="lucide lucide-triangle-alert-icon lucide-triangle-alert"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <div className="floating-content">
                <div className="floating-title">Risk Alert</div>
                <div className="floating-subtitle">Coverage gap detected</div>
              </div>
            </div>
          </div>
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

export default HeroSection;
