import React, { useEffect } from 'react';

const ExperienceSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('animate__fadeInLeft')) {
            entry.target.classList.add('animate__animated');
          } else if (entry.target.classList.contains('animate__fadeInRight')) {
            entry.target.classList.add('animate__animated');
          }
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate__fadeInLeft, .animate__fadeInRight').forEach((el) => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  }, []);

  return (
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="flex flex-col md:flex-row items-center animate__animated animate__fadeInLeft">
              <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                <div className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-white mb-2">Front-end Developer</h3>
                  <h4 className="text-blue-500 font-semibold mb-2">Akatsuki Coding Club</h4>
                  <p className="text-gray-400 mb-2">Sep 2024 - Oct 2024</p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    
                    <li>Managed the ui and customizaion in Website</li>
                    <li>Optimized website performance and compatibility</li>
                    <li>responsive UIs using React.js, Tailwind CSS, and JavaScript. </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-12 relative">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-neutral-900">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1 md:pl-12"></div>
            </div>

            {/* Experience 2 */}
            <div className="flex flex-col md:flex-row items-center animate__animated animate__fadeInRight">
              <div className="flex-1 md:pr-12"></div>
              <div className="hidden md:block w-12 relative">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-neutral-900">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1 md:text-left md:pl-12">
                <div className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-white mb-2">React Developer</h3>
                  <h4 className="text-blue-500 font-semibold mb-2">Talentlo Startup</h4>
                  <p className="text-gray-400 mb-2">2019 - 2021</p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li>Building responsive UI using React.js and Tailwind CSS for a seamless user experience</li>
                    <li>Integrating APIs and managing state efficiently using Redux and React hooks.</li>
                    <li>Optimizing performance by debugging, improving rendering, and ensuring scalability.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            {/* <div className="flex flex-col md:flex-row items-center animate__animated animate__fadeInLeft">
              <div className="flex-1 md:text-right md:pr-12">
                <div className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-white mb-2">Software Developer</h3>
                  <h4 className="text-blue-500 font-semibold mb-2">Tech StartUp</h4>
                  <p className="text-gray-400 mb-2">2018 - 2019</p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li>Built full-stack web applications</li>
                    <li>Implemented RESTful APIs</li>
                    <li>Developed mobile-responsive interfaces</li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-12 relative">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-neutral-900">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1 md:pl-12"></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
