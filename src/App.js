import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import CV from "./scenes/CV";
import Contact from "./scenes/Contact";
import { useState, useEffect } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home"); //by default is at home(page)
  const [isTop, setIsTop] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)"); //set the min width to be 1060 pixels

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrolly === 0) setIsTop(true);
      if (window.scrolly !== 0) setIsTop(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="app bg-deep-blue">
    <Navbar isTop={isTop} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  <div className="w-5/6 mx-auto md:h-full">
    {isAboveMediumScreens && (
      <DotGroup
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    )}
    <Landing setSelectedPage={setSelectedPage} />

  </div>
  
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <CV />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
  </div>;
}

export default App;
