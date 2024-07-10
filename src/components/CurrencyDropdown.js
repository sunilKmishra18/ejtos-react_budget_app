import React, { useState } from 'react';

const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: '1', label: '$ Dollar' },
    { value: '2', label: '£ Pound' },
    { value: '3', label: '€ Euro' },
    { value: '3', label: '₹ Ruppee' },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='alert alert-primary'>
     <span>Currency ({selectedOption})</span>
    <div className="dropdown">
      <button onClick={handleToggle} className="dropdown-toggle">
        {selectedOption ? selectedOption.label : 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
     </div>
  );
};

export default CurrencyDropdown;
