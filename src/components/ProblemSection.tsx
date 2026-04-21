import { useState } from "react";
import "../styles/ProblemSection.css";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const ProblemSection = () => {
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

  const problems = [
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
          className="lucide lucide-circle-alert-icon lucide-circle-alert"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      ),
      tag: "Income Risk",
      title: "Unprotected Income & Family Security",
      description:
        "Unexpected illness, accidents, or death can instantly remove a family's primary income source.",
      consequence:
        "Without proper protection, families are forced to rely on savings, loans, or fundraising.",
      stat: "60%",
      statLabel: "of families face financial hardship after income loss",
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
          className="lucide lucide-file-xcorner-icon lucide-file-x-corner"
        >
          <path d="M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
          <path d="M14 2v5a1 1 0 0 0 1 1h5" />
          <path d="m15 17 5 5" />
          <path d="m20 17-5 5" />
        </svg>
      ),
      tag: "Coverage Gaps",
      title: "Incomplete or Poorly Structured Insurance",
      description:
        "Many policies are purchased individually without a strategy, leaving critical protection gaps in health, property, or income coverage.",
      stat: "40%",
      statLabel: "of policies have overlapping or missing coverage",
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
          className="lucide lucide-clock-icon lucide-clock"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      tag: "Decision Paralysis",
      title: "Delayed Protection Due to Confusion",
      description:
        "Insurance products can be complicated and overwhelming, causing people to delay coverage until it's too late.",
      stat: "73%",
      statLabel: "delay insurance decisions due to complexity",
    },
  ];

  return (
    <section className="problem-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header problem-header">
          <div className="problem-badge">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>The Hidden Risk</span>
          </div>
          <h2 className="section-title">
            Most People Are Financially Exposed{" "}
            <span className="highlight-danger">Without Realizing It</span>
          </h2>
          <p className="section-description">
            Many individuals and businesses think they're protected—until a
            crisis reveals gaps in their coverage.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-card-header">
                <div className="problem-icon-wrapper">
                  <div className="problem-icon">{problem.icon}</div>
                  <div className="icon-pulse"></div>
                </div>
                <span className="problem-tag">{problem.tag}</span>
              </div>

              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>

              {problem.consequence && (
                <div className="consequence-box">
                  <div className="consequence-icon">
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
                  <p>{problem.consequence}</p>
                </div>
              )}

              <div className="problem-stat">
                <span className="stat-number">{problem.stat}</span>
                <span className="stat-label">{problem.statLabel}</span>
              </div>

              <div className="problem-accent"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="problem-cta">
          <p className="cta-text">
            Don't wait for a crisis to discover your coverage gaps.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Get Your Protection Assessment
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

export default ProblemSection;
