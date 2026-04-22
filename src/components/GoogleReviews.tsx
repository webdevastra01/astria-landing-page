import { useEffect } from "react";
import "../styles/GoogleReviews.css";

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Trusted Feedback</div>
          <h2 className="section-title">
            What Our Clients <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="section-subtitle">
            Real reviews from real people who trust Astria with their protection
            planning.
          </p>
        </div>

        <div className="reviews-widget">
          <div
            className="elfsight-app-2cc92ea8-bd60-468e-b5cf-d9af2cea349d"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
