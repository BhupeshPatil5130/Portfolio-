// // import React from "react"; // not needed in this case  

// const AboutMe = () => {
//   return (
//     <section id="about" className="py-20 bg-neutral-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
//             About Me
//           </h2>
//           <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6 animate__animated animate__fadeInLeft">
//             <h3 className="text-2xl font-semibold text-neutral-900">
//               Computer Engineer & Software Developer
//             </h3>
//             <p className="text-neutral-700 leading-relaxed">
//               I am a dedicated second-year Computer Engineering student at R.C.
//               Patel Institute of Technology, with a CGPA of 8.76 in my first
//               year. I have a strong interest in web development and software
//               engineering, with hands-on experience in HTML, CSS, JavaScript,
//               React, Tailwind CSS, Java, and C.
//             </p>
//             {/* <p className="text-neutral-700 leading-relaxed">
//               I graduated from Technical University with a degree in Computer Engineering, and since then, I've worked on various projects ranging from embedded systems to full-stack web applications.
//             </p> */}
//             <div className="grid grid-cols-2 gap-4 pt-4">
//               <div className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
//                 <h4 className="font-semibold text-neutral-900 mb-2">
//                   Education
//                 </h4>
//                 <p className="text-neutral-600">B.Tech. Computer Engineering</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
//                 <h4 className="font-semibold text-neutral-900 mb-2">
//                  Fresher
//                 </h4>
             
//               </div>
//             </div>
//           </div>

//           <div className="animate__animated animate__fadeInRight">
//             <div className="bg-white p-6 rounded-xl shadow-xl">
//               <div className="space-y-4">
//                 {[
//                   { skill: "Software Development", percentage: "90%" },
//                   { skill: "Hardware Design", percentage: "85%" },
//                   { skill: "System Architecture", percentage: "88%" },
//                   { skill: "Problem Solving", percentage: "95%" },
//                 ].map(({ skill, percentage }, index) => (
//                   <div key={index} className="space-y-2">
//                     <div className="flex justify-between items-center">
//                       <span className="text-neutral-700 font-medium">
//                         {skill}
//                       </span>
//                       <span className="text-blue-500">{percentage}</span>
//                     </div>
//                     <div className="w-full bg-neutral-200 rounded-full h-2">
//                       <div
//                         className="bg-blue-500 h-2 rounded-full"
//                         style={{ width: percentage }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-8 flex justify-center gap-4">
//               <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors animate__animated animate__fadeIn animate__delay-1s">
//                 Download CV
//               </button>
//               <button className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors animate__animated animate__fadeIn animate__delay-1s">
//                 View Projects
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>  
//   );
// };

// export default AboutMe;
const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeIn">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Computer Engineer & Software Developer
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              I am a dedicated second-year Computer Engineering student at R.C.
              Patel Institute of Technology, with a CGPA of 8.76 in my first
              year. I have a strong interest in web development and software
              engineering, with hands-on experience in HTML, CSS, JavaScript,
              React, Tailwind CSS, Java, and C.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 animate__animated animate__fadeInLeft">
              <div className="bg-white p-4 justify-center rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
                <h4 className="font-semibold  text-neutral-900 mb-2">
                  Education
                </h4>
                <p className="text-neutral-600">B.Tech. Computer Engineering</p>
              </div>
              {/* <div className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
                <h4 className="font-semibold text-neutral-900 mb-2">
                 Fresher
                </h4>
              </div> */}
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <div className="relative w-full h-full flex justify-center items-center">
              <img
                src="./bhupeshimg.jpg"
                alt="Bhupesh Patil"
                className="rounded-xl shadow-xl w-full h-auto max-w-xs md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;