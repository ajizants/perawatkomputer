import react from "react";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded">
          <p className="text-xl text-gray-400 dark:text-black">
            Sebagai perawat profesional dengan passion di bidang teknologi, saya menggabungkan kemampuan klinis dengan keterampilan pengembangan web dan videografi untuk menciptakan solusi inovatif yang meningkatkan kualitas hidup. Dengan
            pengalaman di bidang kesehatan dan kemampuan teknis yang kuat, saya menawarkan layanan pengembangan web, videografi, dan konsultasi kesehatan.
          </p>
        </div>
        <div className="flex items-center justify-center rounded">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
            </svg>
          </p>
        </div>
      </div>
    </>
  );
}
