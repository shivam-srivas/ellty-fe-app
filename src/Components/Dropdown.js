import React, { useState } from 'react';
import '../index.css'; // Import your CSS file for styling

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (page) => {
    console.log(`Selected page: ${page}`);
    // You can add further logic here for handling item selection
    // For example, you could close the dropdown after selecting an item
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        All Pages
        <div className="dropdown-arrow">{isOpen ? '▲' : '▼'}</div>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item" onClick={() => handleItemClick('Page 1')}>
            Page 1
          </div>
          <div className="dropdown-item" onClick={() => handleItemClick('Page 2')}>
            Page 2
          </div>
          <div className="dropdown-item" onClick={() => handleItemClick('Page 3')}>
            Page 3
          </div>
        </div>
      )}
       <button className="done-button">Done</button>
    </div>
  );
};

export default Dropdown;
