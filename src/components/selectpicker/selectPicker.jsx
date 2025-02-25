import React, { useState, useRef, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./selectPicker.css"; // Import the updated CSS

const SelectPicker = ({ options, label, value, handleChange, readOnly, placeholder = "" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const dropdownRef = useRef(null);

  // Improved search: Prioritize matches at the start of words
  const filteredOptions = options
    .filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const indexA = a.label.toLowerCase().indexOf(searchTerm.toLowerCase());
      const indexB = b.label.toLowerCase().indexOf(searchTerm.toLowerCase());
      return indexA - indexB; // Prioritize matches appearing earlier in the word
    });

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
          setIsOpen(false);
          setSearchTerm(""); // Reset search after selection
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
      {/* Label */}
      <label className="selectpicker-label">{label}</label>

      {/* Custom Dropdown */}
      <div
        className="selectpicker-dropdown-container"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <input
          type="text"
          className="selectpicker-dropdown"
          value={value?.label || ""}
          placeholder={placeholder}
          readOnly
          disabled={readOnly}
        />
        {/* Arrow Icon */}
        <span className="selectpicker-arrow">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Searchable Dropdown */}
      {isOpen && (
        <div className="selectpicker-options-container">
          {/* Search Bar */}
          <input
            type="text"
            className="selectpicker-search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />

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
        setIsOpen(false);
        setSearchTerm(""); // Reset search
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
    </div>
  );
};

export default SelectPicker;
