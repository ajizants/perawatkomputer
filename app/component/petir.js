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

      //   // Batasi jumlah tetesan agar tidak terlalu banyak
      if (raindrops.length > 500) {
        setRaindrops([]);
      }
    };

    // Generate tetesan hujan secara terus-menerus
    const interval = setInterval(generateRaindrops, 1000);

    return () => clearInterval(interval); // Hentikan interval saat komponen di-unmount
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
    // <div className="app">
    <div className="flex align-center justify-center text-center bg-white relative">
      <div
        className="spotlight"
        style={{
          left: cursorPosition.x - 150, // Mengatur posisi horizontal cahaya senter
          top: cursorPosition.y - 150, // Mengatur posisi vertikal cahaya senter
        }}
      />
      {/* <h1>Efek Hujan</h1> */}
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
  );
}

export default Petir;
