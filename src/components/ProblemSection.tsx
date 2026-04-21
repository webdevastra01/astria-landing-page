import { useState } from "react";
import "../styles/ProblemSection.css";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const ProblemSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (formData: any) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Quote request submitted:", formData);
    // Handle success (toast, redirect, etc.)
  };

  const problems = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2" strokeOpacity="0.3" />
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
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path d="M15 2v6h6" />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
          <circle cx="9" cy="13" r="1" fill="currentColor" />
          <path d="M3 3l18 18" strokeLinecap="round" />
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
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2" strokeOpacity="0.3" />
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
                  <svg
                    className="consequence-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
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
          <button className="btn btn-primary" onClick={() => {setIsModalOpen(true)}}>
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
      />
    </section>
  );
};

export default ProblemSection;
