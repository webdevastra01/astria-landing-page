import { useState, useEffect } from "react";
import "../styles/Navigationbar.css";
import astriaLogo from "../assets/astria-logo.png";
import InsuranceQuoteModal from "./InsuranceQuoteModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (formData: any) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Quote request submitted:", formData);
    // Handle success (toast, redirect, etc.)
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
                onClick={() => scrollToSection("contact")}
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
      />
    </>
  );
};

export default Navbar;
