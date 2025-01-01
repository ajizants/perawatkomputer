"use client"; // Pastikan ini ada jika menggunakan Next.js dengan client-side rendering

import React, { useEffect, useState } from "react";
import "./styles.css"; // Pastikan untuk mengimpor file CSS

function Petir() {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    const generateRaindrops = () => {
      const newRaindrop = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 1 + 2}s`, // Kecepatan jatuh acak
        animationDelay: `${Math.random() * 2}s`, // Penundaan acak untuk variasi
      };
      setRaindrops((prev) => [...prev, newRaindrop]);
      if (raindrops.length > 500) {
        setRaindrops([]);
      }
    };
    const interval = setInterval(generateRaindrops, 1000);

    return () => clearInterval(interval);
  }, [raindrops]);

  const [cursorPosition, setCursorPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="top-2/5">
      <div
        className="spotlight"
        style={{
          left: cursorPosition.x - 150, // Mengatur posisi horizontal cahaya senter
          top: cursorPosition.y - 150, // Mengatur posisi vertikal cahaya senter
        }}
      />
      <div className="relative">
        <div className="rain-container">
          {raindrops.map((drop, index) => (
            <div
              key={index}
              className="raindrop"
              style={{
                left: drop.left,
                animationDuration: drop.animationDuration,
                animationDelay: drop.animationDelay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Petir;
