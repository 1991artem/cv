import { useEffect, useState } from "react";
import NavigateHeader from "../nav/Nav";
import AboutLeftSide from "./AboutLeftSide";
import AboutMainSide from "./AboutMainSide";

function About() {
  const [width, setWidth] = useState(0)
  useEffect(()=>{
    const screenWidth = window.screen.width;
    setWidth(screenWidth)
  }, [])
  return (
      <div className="about-page">
        {
          width <= 900 ?
          <NavigateHeader />
          : null
        }
        <AboutLeftSide />
        <AboutMainSide />
      </div>
  );
}

export default About;