import react from "react";

export default function Skils() {
  return (
    <>
      <section class="bg-gray-100 p-4 mt-4 flex flex-col items-center">
        <h2 class="text-2xl font-bold mb-4">Keterampilan Teknis</h2>
        <div class="flex flex-wrap justify-center mb-4">
          <div class="w-1/3 p-4 bg-white rounded-lg shadow-md">
            <img src="logo-react.svg" alt="React" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-lg font-bold">Pengembangan Web</h3>
            <ul class="list-disc pl-4 text-sm">
              <li>React</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
          </div>
          <div class="w-1/3 p-4 bg-white rounded-lg shadow-md">
            <img src="logo-videografi.svg" alt="Videografi" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-lg font-bold">Videografi</h3>
            <ul class="list-disc pl-4 text-sm">
              <li>Produksi video</li>
              <li>Editing</li>
              <li>Animasi</li>
            </ul>
          </div>
          <div class="w-1/3 p-4 bg-white rounded-lg shadow-md">
            <img src="logo-database.svg" alt="Basis Data" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-lg font-bold">Basis Data</h3>
            <ul class="list-disc pl-4 text-sm">
              <li>Desain database</li>
              <li>Pengelolaan database</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
