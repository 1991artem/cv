import Experience from "../experience/Experience";
import NavigateHeader from "../nav/Nav";
import HeaderMain from "./HeaderMain";

function AboutMainSide() {
  return ( 
    <div className="about-page_main">
    <NavigateHeader/>
    <div className="owner-name">
      <p>Artem</p>
      <p>Puzik</p>
    </div>
    <div className="owner-proffession">
      <p>Frontend-Developer</p>
    </div>
    <HeaderMain />
    <Experience />
  </div>
   );
}

export default AboutMainSide;