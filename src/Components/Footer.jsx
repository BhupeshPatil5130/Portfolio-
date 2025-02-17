// import React, { useEffect } from "react";

// const Footer = () => {
//   useEffect(() => {
//     // Scroll to Top functionality
//     const scrollToTopBtn = document.getElementById("scrollToTop");

//     window.addEventListener("scroll", () => {
//       if (window.pageYOffset > 300) {
//         scrollToTopBtn.classList.remove("opacity-0", "invisible");
//         scrollToTopBtn.classList.add("opacity-100", "visible");
//       } else {
//         scrollToTopBtn.classList.add("opacity-0", "invisible");
//         scrollToTopBtn.classList.remove("opacity-100", "visible");
//       }
//     });

//     scrollToTopBtn.addEventListener("click", () => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     });

//     // Animation on scroll
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate__animated");
//             entry.target.style.opacity = 1;
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll("#footer .animate__animated").forEach((el) => {
//       el.style.opacity = 0;
//       observer.observe(el);
//     });
//   }, []);

//   return (
//     <div id="root">
//       <footer id="footer" className="bg-neutral-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Top Footer Section */}
//           <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-neutral-800">
//             {/* About Section */}
//             <div className="animate__animated animate__fadeIn">
//               <h3 className="text-xl font-bold mb-4">Bhupesh Patil</h3>
//               <p className="text-gray-400 mb-4">
//                 Computer Engineer specializing in full-stack development. DSA problem Solving
//               </p>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-500 transition-colors"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-500 transition-colors"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-blue-500 transition-colors"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="animate__animated animate__fadeIn animate__delay-1s">
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="#hero"
//                     className="text-gray-400 hover:text-blue-500 transition-colors"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#about"
//                     className="text-gray-400 hover:text-blue-500 transition-colors"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#projects"
//                     className="text-gray-400 hover:text-blue-500 transition-colors"
//                   >
//                     Projects
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#blog"
//                     className="text-gray-400 hover:text-blue-500 transition-colors"
//                   >
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#contact"
//                     className="text-gray-400 hover:text-blue-500 transition-colors"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Services */}
//             <div className="animate__animated animate__fadeIn animate__delay-2s">
//               <h3 className="text-xl font-bold mb-4">Services</h3>
//               <ul className="space-y-2">
//                 <li className="text-gray-400">Embedded Systems</li>
              
//                 <li className="text-gray-400">Web Development</li>
//                 <li className="text-gray-400">Software Architecture</li>
//                 <li className="text-gray-400">Technical Consulting</li>
//               </ul>
//             </div>

//             {/* Newsletter */}
//             <div className="animate__animated animate__fadeIn animate__delay-3s">
//               <h3 className="text-xl font-bold mb-4">Newsletter</h3>
//               <p className="text-gray-400 mb-4">
//                 Subscribe to my newsletter for tech updates and insights.
//               </p>
//               <form className="space-y-4">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Bottom Footer */}
//           <div className="py-6 text-center animate__animated animate__fadeIn">
//             <p className="text-gray-400">
//               © 2025 Bhupesh Patil. All rights reserved.
//             </p>
//           </div>
//         </div>

//         {/* Scroll to Top Button */}
//         <button
//           id="scrollToTop"
//           className="fixed bottom-8 right-8 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors opacity-0 invisible"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M5 10l7-7m0 0l7 7m-7-7v18"
//             />
//           </svg>
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Scroll to Top functionality
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove("opacity-0", "invisible");
        scrollToTopBtn.classList.add("opacity-100", "visible");
      } else {
        scrollToTopBtn.classList.add("opacity-0", "invisible");
        scrollToTopBtn.classList.remove("opacity-100", "visible");
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated");
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("#footer .animate__animated").forEach((el) => {
      el.style.opacity = 0;
      observer.observe(el);
    });
  }, []);

  return (
    <div id="root">
      <footer id="footer" className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Footer Section */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-neutral-800">
            {/* About Section */}
            <div className="animate__animated animate__fadeIn">
              <h3 className="text-xl font-bold mb-4">Bhupesh Patil</h3>
              <p className="text-gray-400 mb-4">
                Computer Engineer specializing in full-stack development. DSA problem Solving
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
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
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate__animated animate__fadeIn animate__delay-1s">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="animate__animated animate__fadeIn animate__delay-2s">
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="animate__animated animate__fadeIn animate__delay-3s">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <p className="text-gray-400">Email: bhupesh.patil@example.com</p>
                </li>
                <li>
                  <p className="text-gray-400">Phone: 123-456-7890</p>
                </li>
                <li>
                  <p className="text-gray-400">Address: Mumbai, India</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="py-4 text-center text-gray-400 border-t border-neutral-800">
            <p>&copy; 2025 Bhupesh Patil. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="scrollToTop"
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-2 opacity-0 invisible transition-opacity"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default Footer;
