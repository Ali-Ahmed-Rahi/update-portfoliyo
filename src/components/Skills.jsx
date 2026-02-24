import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { RiFirebaseFill, RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const skillList = [
  { icon: <SiHtml5 className="text-4xl text-orange-500" />, name: "HTML" },
  { icon: <IoLogoCss3 className="text-4xl text-blue-500" />, name: "CSS" },
  { icon: <SiJavascript className="text-4xl text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-4xl text-cyan-400" />, name: "React" },
  { icon: <IoLogoNodejs className="text-4xl text-green-500" />, name: "Node Js" },
  { icon: <SiExpress className="text-4xl text-white" />, name: "Express Js" },
  { icon: <SiMongodb className="text-4xl text-green-500" />, name: "MongoDB" },
  { icon: <RiFirebaseFill className="text-4xl text-yellow-400" />, name: "Firebase" },
  { icon: <GrGithub className="text-4xl text-white" />, name: "Github" },
  { icon: <SiVercel className="text-4xl text-white" />, name: "Vercel" },
  { icon: <RiNextjsFill className="text-4xl text-white" />, name: "Next JS" },
  { icon: <SiTailwindcss className="text-4xl text-cyan-500" />, name: "Tailwind" },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const [defaultCount, setDefaultCount] = useState(6); 

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) {
        setDefaultCount(8);
      } else {
        setDefaultCount(6);
      }
    };

    updateCount(); 
    window.addEventListener("resize", updateCount); 
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const displayedSkills = showAll ? skillList : skillList.slice(0, defaultCount);

  return (
    <div className="">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-sm font-work text-yellow-500">What I Have</h2>
        <h2 className="uppercase font-playfair flex justify-center md:justify-start gap-2 text-2xl">
          Areas <span>of</span> Expertise
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border rounded-lg w-full max-w-[160px] p-3 font-open font-bold"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      {skillList.length > defaultCount && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 border border-yellow-500 rounded-full  hover:bg-white hover:text-black text-white font-semibold  transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Skills;
