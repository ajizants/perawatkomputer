"use client";
import React, { useState, useEffect, useMemo } from "react";

function Jumbotron() {
  const useTypewriter = (text, speed = 100) => {
    const [index, setIndex] = useState(0);
    const displayText = useMemo(() => text.slice(0, index), [index]);

    useEffect(() => {
      if (index >= text.length) return;

      const timeoutId = setTimeout(() => {
        setIndex((i) => i + 1);
      }, speed);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [index, text, speed]);

    return displayText;
  };

  const typedText1 = useTypewriter("Welcome..!!", 100);
  const [showSecondText, setShowSecondText] = useState(false);
  const typedText2 = useTypewriter("Saya Aji Santoso, Junior Web Developer", 100);
  const [isFirstTextComplete, setIsFirstTextComplete] = useState(false); // Track if the first text is complete

  useEffect(() => {
    if (typedText1 === "Welcome..!!") {
      // Mark first text as complete and trigger second text to appear after delay
      setIsFirstTextComplete(true);
      setTimeout(() => {
        setShowSecondText(true);
      }, 1000); // Delay before starting the second text
    }
  }, [typedText1]);

  return (
    <section className="h-screen bg-white dark:bg-gray-900 flex items-center align-middle">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {typedText1}
          {!isFirstTextComplete && <span className="animate-ping">|</span>} {/* Show cursor only while typing */}
        </h1>

        {/* Menambahkan efek kursor berkedip pada teks kedua setelah teks pertama selesai */}
        {typedText1 && <br />}
        {showSecondText && (
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            {typedText2}
            <span className="animate-ping">|</span>
          </h2>
        )}

        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a
            href="#"
            className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
