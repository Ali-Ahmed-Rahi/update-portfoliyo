import { IoIosContact } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ProfileSelect from "../helpers/profileSelect";


const Sidebar = () => {
  
  return (
    <div>
      <div className="md:flex md:flex-col h-screen hidden lg:block">
        <div className="flex items-center justify-center pt-12">
          <ProfileSelect/>
        </div>
        <div className="text-center pt-10">
          <h2 className="text-2xl font-bold text-white font-playfair">
            Ali Ahmed Rahi
          </h2>
          <p className="text-yellow-500 text-[14px] font-work ">Full Stack Web Developer</p>
        </div>
        <div className="pt-16 flex justify-center font-roboto">
          <ul tabIndex={0} className="menu gap-6 text-center uppercase text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `w-32 transition-all duration-200 ${
                  isActive
                    ? "text-yellow-500 underline underline-offset-4"
                    : "hover:underline hover:text-base hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `w-32 transition-all duration-200 ${
                  isActive
                    ? "text-yellow-500 underline underline-offset-4"
                    : "hover:underline hover:text-base hover:text-white"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/skill"
              className={({ isActive }) =>
                `w-32 transition-all duration-200 ${
                  isActive
                    ? "text-yellow-500 underline underline-offset-4"
                    : "hover:underline hover:text-base hover:text-white"
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `w-32 transition-all duration-200 ${
                  isActive
                    ? "text-yellow-500 underline underline-offset-4"
                    : "hover:underline hover:text-base hover:text-white"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `w-32 transition-all duration-200 ${
                  isActive
                    ? "text-yellow-500 underline underline-offset-4"
                    : "hover:underline hover:text-base hover:text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>

        {/* Footer at the Bottom */}
        <footer className="footer footer-center text-white p-4 pt-72 font-work">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
              <br /> ACME Industries Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
