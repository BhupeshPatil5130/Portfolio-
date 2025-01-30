
import React from "react";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="relative bg-neutral-800 h-64 flex items-center justify-center">
              <img
                src="./shpping.png"
                alt="Ecommerce website"
                className="object-cover absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Ecommerce Platform
              </h3>
              <p className="text-neutral-600 mb-4">
                Developed an eCommerce website using React.js, Tailwind CSS, and
                Redux for cart management. Features product browsing and
                seamless cart updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Redux
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/BhupeshPatil5130/E-commerce"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://e-commerce-omega-ruby.vercel.app/"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="relative bg-neutral-800 h-64 flex items-center justify-center">
              <img
                src="./akatsukiimg.png"
                alt="Akatsuki Coding Club Wesbsite"
                className="object-cover absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Akatsuki Coding Club Wesbsite
              </h3>
              <p className="text-neutral-600 mb-4">
                Developed and maintain the Akatsuki Coding Club website using React for 1,000+ members, featuring dynamic profiles, event galleries, and package details for an interactive, responsive experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  React 
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Typescript 
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Acernity
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Shadcn
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Pruthviraj-chaudhari/Akatsuki-Official-Website"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://akatsuki.rcpit.ac.in/"
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>

          {/* More projects can be added here */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;