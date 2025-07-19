import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Projects from "../components/Project";
import Skills from "../components/Skills";



const HomeBar = () => {
  return (
    <div className=" space-y-28 "> 
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      
    </div>
  );
};

export default HomeBar;