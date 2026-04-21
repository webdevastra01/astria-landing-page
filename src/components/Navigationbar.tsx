import { useState, useEffect } from "react";
import "../styles/Navigationbar.css";
import astriaLogo from "../assets/astria-logo.png";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isModalOpen]);

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

      // Success feedback
      alert(
        "✅ Quote request submitted! Our team will contact you within 24 hours.",
      );

      // Optional: Track conversion
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "quote_request", {
          insurance_type: formData.insuranceType,
        });
      }
    } catch (error) {
      console.error("Quote submission error:", error);
      alert(
        "❌ Something went wrong. Please try again or call us at 0912 967 6049.",
      );
      throw error; // Re-throw so modal stays open on error
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Logo / Brand */}
          <a
            href="#"
            className="nav-brand"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={astriaLogo}
              alt="Astria Insurance Solutions Logo"
              className="nav-logo"
            />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="nav-link"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("process")}
                className="nav-link"
              >
                Process
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Primary CTA Button */}
          <div className="nav-cta">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary btn-sm"
            >
              Get Free Protection Review
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="mobile-nav-link"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("process")}
                className="mobile-nav-link"
              >
                Process
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="mobile-nav-link"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="mobile-nav-link"
              >
                Contact
              </button>
            </li>
            <li className="mobile-cta">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary btn-lg"
              >
                Get Free Protection Review
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <InsuranceQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        submitLabel={isSubmitting ? "Submitting..." : "Request Insurance Quote"}
      />
    </>
  );
};

export default Navbar;
