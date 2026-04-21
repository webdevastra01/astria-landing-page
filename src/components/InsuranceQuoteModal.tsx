import { useEffect, useRef, useState } from "react";
import "../styles/InsuranceQuoteModal.css";

interface InsuranceQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => Promise<void>;
  title?: string;
  description?: string;
  submitLabel?: string;
  insuranceOptions?: string[];
}

const DEFAULT_INSURANCE_OPTIONS = [
  "Life Insurance",
  "Health Insurance",
  "Motor / Vehicle",
  "Home / Property",
  "Business Insurance",
  "Travel Insurance",
  "Gadget Insurance",
  "Others",
];

const InsuranceQuoteModal = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Request Insurance Quote",
  description = "Fill out the form below and our team will contact you with a quotation.",
  submitLabel = "Request Insurance Quote",
  insuranceOptions = DEFAULT_INSURANCE_OPTIONS,
}: InsuranceQuoteModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    insuranceType: "",
    description: "",
    estimatedValue: "",
    location: "",
    coverageDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Focus first input after animation
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: any) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === "Tab") {
        const focusableElements =
          modalRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit?.(formData);
      setFormData({
        fullName: "",
        contactNumber: "",
        insuranceType: "",
        description: "",
        estimatedValue: "",
        location: "",
        coverageDetails: "",
      });
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-header">
          <div>
            <h2 id="modal-title" className="modal-title">
              {title}
            </h2>
            <p id="modal-description" className="modal-desc">
              {description}
            </p>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name <span className="form-required">*</span>
            </label>
            <input
              ref={firstInputRef}
              id="fullName"
              name="fullName"
              type="text"
              className="form-input"
              placeholder="Juan Dela Cruz"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber" className="form-label">
              Contact Number <span className="form-required">*</span>
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              className="form-input"
              placeholder="+63 912 345 6789"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="insuranceType" className="form-label">
              What would you like to insure?{" "}
              <span className="form-required">*</span>
            </label>
            <select
              id="insuranceType"
              name="insuranceType"
              className="form-select"
              value={formData.insuranceType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select insurance type
              </option>
              {insuranceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Brief Description <span className="form-required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              rows={3}
              placeholder="Briefly describe the asset, property, or item you want to insure."
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row grid grid-2">
            <div className="form-group">
              <label htmlFor="estimatedValue" className="form-label">
                Estimated Value{" "}
                <span className="form-optional">(optional)</span>
              </label>
              <input
                id="estimatedValue"
                name="estimatedValue"
                type="number"
                className="form-input"
                placeholder="₱ Estimated value"
                value={formData.estimatedValue}
                onChange={handleChange}
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Location <span className="form-optional">(optional)</span>
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="form-input"
                placeholder="City / Address"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="coverageDetails" className="form-label">
              What do you want to be covered?{" "}
              <span className="form-required">*</span>
            </label>
            <textarea
              id="coverageDetails"
              name="coverageDetails"
              className="form-textarea"
              rows={3}
              placeholder="Example: theft, fire, accident, damage, medical coverage, etc."
              value={formData.coverageDetails}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span
                  className="flex"
                  style={{ gap: "var(--space-2)", alignItems: "center" }}
                >
                  <svg
                    className="spinner"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      strokeDasharray="60"
                      strokeDashoffset="20"
                      strokeLinecap="round"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                submitLabel
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsuranceQuoteModal;
