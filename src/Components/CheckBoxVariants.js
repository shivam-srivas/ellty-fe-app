import React, { useState } from 'react';
import '../index.css';

const CheckboxVariants = () => {
  const [checked, setChecked] = useState(Array(9).fill(false));

  const toggleCheckbox = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const checkboxVariants = [
    'default', 'variant2', 'variant3', 'variant4', 'variant5', 'variant6', 'variant7', 'variant8', 'variant9'
  ];

  return (
    <div className="checkbox-container">
      {checkboxVariants.map((variant, index) => (
        <div
          key={index}
          className={`checkbox ${variant} ${checked[index] ? 'ticked' : ''}`}
          onClick={() => toggleCheckbox(index)}
        >
          <div className="checkbox-icon"></div>
        </div>
      ))}
    </div>
  );
};

export default CheckboxVariants;
