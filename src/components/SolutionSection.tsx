import '../styles/SolutionSection.css';

const SolutionSection = () => {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      text: 'Protect your income and financial future'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      text: 'Safeguard your family against unexpected events'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path d="M9 12h6m-6 4h6" strokeOpacity="0.4" />
        </svg>
      ),
      text: 'Compare multiple insurers for better options'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: 'Eliminate insurance coverage gaps'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      text: 'Build a protection plan that grows with your life'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Analyze',
      description: 'We assess your financial risks, income sources, assets, and family situation to understand your unique protection needs.'
    },
    {
      number: '02',
      title: 'Compare',
      description: 'We evaluate policies from multiple insurers to find the best coverage options, rates, and terms for your specific situation.'
    },
    {
      number: '03',
      title: 'Structure',
      description: 'We design a comprehensive protection plan that coordinates all your coverage, eliminating gaps and redundancies.'
    }
  ];

  return (
    <section className="solution-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header solution-header">
          <div className="solution-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>The Solution</span>
          </div>
          <h2 className="section-title">
            Structured Insurance Planning That Protects{' '}
            <span className="gradient-text">Every Area of Your Life</span>
          </h2>
          <p className="section-description">
            Astria Insurance Solutions focuses on protection planning, not just selling policies.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="solution-grid">
          {/* Left Content */}
          <div className="solution-content">
            <div className="solution-intro">
              <p className="solution-text">
                We analyze your financial risks, evaluate multiple insurers, and structure a coverage plan that protects your <strong>income, assets, family, and business</strong>.
              </p>
              <p className="solution-closing">
                With Astria, you gain <span className="highlight-success">clarity</span>, <span className="highlight-success">confidence</span>, and <span className="highlight-success">long-term financial protection</span>.
              </p>
            </div>

            {/* Benefits List */}
            <div className="benefits-list">
              <h3 className="benefits-heading">Benefits</h3>
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn btn-primary btn-lg solution-cta">
              Start Your Protection Plan
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Content - Process Steps */}
          <div className="solution-process">
            <div className="process-card">
              <h3 className="process-title">How It Works</h3>
              <div className="process-steps">
                {processSteps.map((step, index) => (
                  <div key={index} className="process-step">
                    <div className="step-number">{step.number}</div>
                    <div className="step-content">
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-description">{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="step-connector">
                        <div className="connector-line"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;