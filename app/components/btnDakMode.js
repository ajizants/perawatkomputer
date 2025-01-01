// "use client";
import React, { useState, useEffect } from "react";

const DarkLightToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center justify-center bg-gray-400 dark:bg-gray-900 rounded-full">
      <div className="flex items-center space-x-2">
        {/* <span className="text-gray-700 dark:text-gray-300">Light</span> */}
        <button className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 focus:outline-none ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`} onClick={toggleMode}>
          <span className={`absolute inline-flex items-center justify-center h-4 w-4 transform rounded-full transition-transform duration-300 ${isDarkMode ? "translate-x-5 bg-yellow-500" : "translate-x-1 bg-gray-500"}`}>
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1.5m6.364 1.136l-1.06 1.06m4.596 6.304h-1.5M18.364 18.364l-1.06-1.06M12 19.5V21m-6.364-1.136l1.06-1.06M3 12h1.5M5.636 5.636l1.06 1.06M12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 0112 3a9.718 9.718 0 019.002 6.748 6.003 6.003 0 00.75 9.252z" />
              </svg>
            )}
          </span>
        </button>
        {/* <span className="text-gray-700 dark:text-gray-300">Dark</span> */}
      </div>
    </div>
  );
};

export default DarkLightToggle;
