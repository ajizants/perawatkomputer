import Image from "next/image";
import react from "react";

export default function About() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center justify-center rounded">
          <p className="text-xl text-black dark:text-gray-100">
            Sebagai perawat profesional dengan passion di bidang teknologi, saya menggabungkan kemampuan klinis dengan keterampilan pengembangan web dan videografi untuk menciptakan solusi inovatif yang meningkatkan kualitas hidup. Dengan
            pengalaman di bidang kesehatan dan kemampuan teknis yang kuat, saya menawarkan layanan pengembangan web, videografi, dan konsultasi kesehatan.
          </p>
        </div>
        <div className="flex items-center justify-center rounded">
          <p className="text-2xl text-black dark:text-gray-500">
            <Image src="/image/SUSANMAS.png" alt="logo" width={100} height={100} />
          </p>
        </div>
      </div>
    </>
  );
}
