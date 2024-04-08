import React, { useState, useEffect, useRef } from "react";

export default function Dropdown({ data, placeholder, defaultDropdownItem, onSelectChange }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultDropdownItem || null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    const clickedItem = data.find((item) => item.id === id);
    setSelectedItem(clickedItem);
    onSelectChange(clickedItem);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Update the selected item when the defaultDropdownItem prop changes
  useEffect(() => {
    setSelectedItem(defaultDropdownItem || null);
  }, [defaultDropdownItem]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem ? selectedItem.label : placeholder}
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/190/411/non_2x/down-arrow-outline-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="arrow"
          style={{ transform: `${isOpen ? "rotate(180deg)" : "none"}`, width: "25px", transition: "0.6s ease" }}
        />
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}
      style={{transition: "0.5s ease-in-out" }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className={`dropdown-item ${selectedItem && item.id === selectedItem.id ? "selected" : "false"}`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
