import Contacts from "../contacts/Contacts";
import Skills from "../skils/Skills";

function AboutLeftSide() {
  return ( 
    <div className="about-page_info">
    <div className="about-page_info_foto">
      <img src={require("../../img/avatar.png")} alt="avatar" />
    </div>
    <Contacts/>
    <Skills />
  </div>
   );
}

export default AboutLeftSide;