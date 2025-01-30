
import React from "react";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="hero"
      className="min-h-screen pt-16 bg-neutral-900 relative bg-cover bg-center"
      style={{ backgroundImage: "url('./Solid-Black-Website-Background.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)]">
        {/* Info Section */}
        <div
          ref={heroRef}
          className={`flex-1 text-center md:text-left transition-opacity duration-1000 ${
            heroInView ? "opacity-100" : "opacity-0"
          } order-2 md:order-1`} // Changed order for small screens
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-500">Bhupesh Patil</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
            Computer Engineer & Developer
          </h2>
          {/* <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
            I am a dedicated second-year Computer Engineering student at R.C. Patel Institute of Technology, with a CGPA of 8.76 in my first year. I have a strong interest in web development and software engineering, with hands-on experience in MERN Stack.  
          </p> */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1C9t7W5jQSs8AK2S2qQ0Gq-v-9VgxAbHe/view"
              className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full transition-all animate__animated animate__fadeIn animate__delay-1s"
              download
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors animate__animated animate__fadeIn animate__delay-1s"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full transition-all animate__animated animate__fadeIn animate__delay-1s"
            >
              View Projects
            </a>
          </div>
          <div className="mt-8 flex gap-6 justify-center md:justify-start">
            {[
              {
                href: "https://github.com/BhupeshPatil5130",
                path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
              },
              {
                href: "https://www.linkedin.com/in/bhupesh-patil-0799ab293/",
                path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
              },
              {
                href: "https://x.com/BhupeshPat33784",
                path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
              },
            ].map((icon, index) => (
              <a key={index} href={icon.href} className="text-gray-400 hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={icon.path}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div
          className={`flex-1 mt-8 md:mt-0 transition-transform duration-1000 ${
            heroInView ? "transform scale-100" : "transform scale-75"
          } order-1 md:order-2`} // Changed order for small screens
        >
          <div className="relative">
            <div className="w-96 h-96 md:w-112 md:h-112 rounded-full bg-blue-500/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl animate-pulse"></div>
            <div className="relative z-10 p-8 ml-11">
              <div className="w-96 h-96 md:w-112 md:h-112 rounded-full bg-neutral-800 border-4 border-blue-500 flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="./WhatsApp Image 2025-01-28 at 00.07.01_fd37300d-fotor-ai-art-effects-20250128001316.jpg"
                  alt="Bhupesh Patil"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;