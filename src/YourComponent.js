import React, { useState } from 'react';
import Tooltip from './components/Tooltip';
const YourComponent = () => {
    const [isHovered, setHovered] = useState(false);
  
    const handleHover = () => {
      setHovered(true);
    };
  
    const handleLeave = () => {
      setHovered(false);
    };
  
    return (
      <div className="flex items-center justify-center h-screen">
        {/* Center the button and text area in the middle of the screen */}
        <div className="relative">
          <button
            className=" bg-red-500 text-white px-20 py-4 rounded transition-transform transform hover:scale-105 hover:font-bold"
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
          >
            Hover over me!
          </button>
          {isHovered && (
            <div className="absolute top-15 left-0 p-4 bg-gray-800 text-white rounded mt-2">
             Thanks for hovering! I'm a tooltip
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default YourComponent;