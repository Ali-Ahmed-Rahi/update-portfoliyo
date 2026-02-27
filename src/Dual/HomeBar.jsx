import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Projec from "../components/projec";
import Projects from "../components/Project";
import Skills from "../components/Skills";



const HomeBar = () => {
  return (
    <div className=" space-y-28 "> 
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      {/* <Projects></Projects> */}
      <Projec></Projec>
      <Contact></Contact>
      
    </div>
  );
};

export default HomeBar;