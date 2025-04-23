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

const Skills = () => {
  return (
    <div>
      <div className="space-y-5">
        <h2 className="text-sm font-work text-yellow-500 space-x-4">
          What I Have
        </h2>
        <h2 className="uppercase font-playfair flex gap-2 text-2xl">
          Areas <span>of</span>Expertise
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiHtml5 className="text-4xl text-orange-500" /> Html
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <IoLogoCss3 className="text-4xl text-blue-500" /> CSS
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiJavascript className="text-4xl text-yellow-400" /> JavaScript
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <FaReact className="text-4xl text-cyan-400" /> React
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <IoLogoNodejs className="text-4xl text-green-500" /> Node Js
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiExpress className="text-4xl text-white" /> Express Js
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiMongodb className="text-4xl text-green-500" /> MongoDB
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <RiFirebaseFill className="text-4xl text-yellow-400" /> FireBase
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-5 ">
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <GrGithub className="text-4xl text-white" /> Github
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiVercel className="text-4xl text-white" /> Vercel
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <RiNextjsFill className="text-4xl text-white" /> Next JS
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiTailwindcss className="text-4xl text-cyan-500" /> Tailwind
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col gap-5 md:hidden block">
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <IoLogoNodejs className="text-4xl text-green-500" /> Node Js
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiExpress className="text-4xl text-white" /> Express Js
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <SiMongodb className="text-4xl text-green-500" /> MongoDB
          </p>
          <p className="flex items-center gap-2 border rounded-lg w-40 p-2 font-open font-bold">
            <RiFirebaseFill className="text-4xl text-yellow-400" /> FireBase
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
