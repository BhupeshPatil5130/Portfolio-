
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Atom, 
  FileCode, 
  Server, 
  Database, 
  Terminal, 
  Braces, 
  SquareGanttChart, 
  Coffee,
  Code,
  GitBranch,
  
} from 'lucide-react';

const SkillsSection = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { title: "React", icon: <Atom size={48} color="#FFFFFF" />, bgColor: "#61DAFB" },
    { title: "JavaScript", icon: <FileCode size={48} color="#000000" />, bgColor: "#F7DF1E" },
    { title: "Node.js", icon: <Server size={48} color="#FFFFFF" />, bgColor: "#339933" },
    { title: "Express.js", icon: <Braces size={48} color="#FFFFFF" />, bgColor: "#000000" },
    { title: "MongoDB", icon: <Database size={48} color="#FFFFFF" />, bgColor: "#47A248" },
    { title: "SQL", icon: <SquareGanttChart size={48} color="#FFFFFF" />, bgColor: "#00758F" },
    { title: "Python", icon: <Terminal size={48} color="#FFD43B" />, bgColor: "#3776AB" },
    { title: "Java", icon: <Coffee size={48} color="#FFFFFF" />, bgColor: "#007396" },
    // { title: "HTML5", icon: <Html5 size={48} color="#E34F26" />, bgColor: "#F06529" },
    // { title: "CSS3", icon: <Css3 size={48} color="#1572B6" />, bgColor: "#2965F1" },
    { title: "Git", icon: <GitBranch size={48} color="#F05032" />, bgColor: "#F1502F" },
    { title: "C++", icon: <Code size={48} color="#00599C" />, bgColor: "#004482" },
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div 
          ref={skillsRef} 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate__animated ${
                skillsInView ? "animate__fadeInUp" : ""
              }`}
              style={{ 
                backgroundColor: skill.bgColor,
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-white">
                  {skill.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;