import React from 'react';
import './Tooltip.css';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      {children}
      <div className="tooltip">{text}</div>
    </div>
  );
};

export default Tooltip;