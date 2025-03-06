import React, { useState, useRef, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./selectPicker.css"; // Ensure proper styles are in place

const SelectPicker = ({ 
  options, 
  label, 
  value, 
  handleChange, 
  readOnly, 
  required = false, 
  error 
}) => {
  const [searchTerm, setSearchTerm] = useState(value?.label || "");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [isTouched, setIsTouched] = useState(false);
  const dropdownRef = useRef(null);

  // Filtered options based on search term
  const filteredOptions = options
    .filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const indexA = a.label.toLowerCase().indexOf(searchTerm.toLowerCase());
      const indexB = b.label.toLowerCase().indexOf(searchTerm.toLowerCase());
      return indexA - indexB;
    });

  // Handle input change (search within options)
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        setHighlightIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
        break;
      case "ArrowUp":
        setHighlightIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        if (highlightIndex >= 0 && filteredOptions[highlightIndex]) {
          handleChange(filteredOptions[highlightIndex]);
          setSearchTerm(filteredOptions[highlightIndex].label); // Set selected value
          setIsOpen(false);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`selectpicker-container ${isOpen ? "active" : ""}`} ref={dropdownRef}>
      
      {/* Custom Dropdown */}
      <div
        className={`selectpicker-dropdown-container ${error && isTouched ? "error-border" : ""}`}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onBlur={() => setIsTouched(true)}
      >
        {/* Floating Label (Inside Dropdown) */}
        <label className={`floating-placeholder ${searchTerm ? "active" : ""}`}>
          {label}
          {required && <span className="required-asterisk"> *</span>}
        </label>

        {/* Editable Input for Search & Selection */}
        <input
          type="text"
          className="selectpicker-dropdown"
          value={searchTerm}
          onChange={handleInputChange}
          disabled={readOnly}
          onClick={() => setIsOpen(true)}
        />

        {/* Arrow Icon */}
        <span className="selectpicker-arrow">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Searchable Dropdown */}
      {isOpen && (
        <div className="selectpicker-options-container">
          {/* Options List */}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={option.value}
                className={`selectpicker-option 
                  ${index === highlightIndex ? "highlighted" : ""} 
                  ${option.value === value?.value ? "selected" : ""}`}
                onClick={() => {
                  handleChange(option);
                  setSearchTerm(option.label); // Set input value
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightIndex(index)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="selectpicker-option">No results found</div>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && isTouched && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectPicker;
