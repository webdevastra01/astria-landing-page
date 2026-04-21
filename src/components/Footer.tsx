import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      label: "Facebook",
      href: "https://facebook.com/astriainsurance",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:helpdesk.astria@gmail.com",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="/" className="footer-brand-link">
              Astria Insurance Solutions - Life & Non-Life Insurance Services
            </a>
            <p className="footer-tagline">
              From daily risks to life’s biggest uncertainties — Astria
              Insurance protects you, your family, and your business.
            </p>
          </div>

          {/* Links Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Links</h4>
            <ul className="footer-links">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Social</h4>
            <ul className="footer-socials">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="footer-social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Astria Insurance Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
