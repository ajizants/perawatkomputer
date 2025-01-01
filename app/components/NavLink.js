import React from "react";

const NaviLink = ({ to, children, isActive }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Mencegah perilaku default navigasi
    const targetElement = document.querySelector(to); // Cari elemen dengan selector `to`
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll secara halus
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`block py-2 px-3 md:p-0 rounded ${
        isActive
          ? "text-blue-700 dark:text-blue-500 font-bold"
          : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      }`}>
      {children}
    </a>
  );
};

export default NaviLink;
