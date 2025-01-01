import Image from "next/image";
import Navigation from "./components/navigation";
export default function Home() {
  return (
    <div>
      {/* <!-- About Section --> */}
      <section id="about" className="min-h-screen py-16 bg-white dark:bg-slate-500">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section id="projects" className="min-h-screen py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* <Image src="" alt="Project 1" className="w-full h-48 object-cover" width={100} height={100} /> */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">Project Title 1</h3>
                <p className="text-gray-600 mt-2">Brief description of the project and its purpose.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Skills Section --> */}
      <section id="skills" className="min-h-screen py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 font-medium">Skill 1</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 font-medium">Skill 2</span>
            <span className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 font-medium">Skill 3</span>
            {/* <!-- Add more skills as needed --> */}
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="min-h-screen py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
          <form action="#" method="POST" className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input type="text" id="name" name="name" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input type="email" id="email" name="email" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea id="message" name="message" rows="4" className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
