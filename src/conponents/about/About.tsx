import Contacts from "../contacts/Contacts";
import Languaes from './Languaes';
import Software from "./Software";
import TechnicalSkills from "./TechnikalSkills";

function About() {
  return (
      <div className="about-page">
        <div className="about-page_info">
          <div className="about-page_info_foto">
            <img src={require("../../img/avatar.png")} alt="avatar" />
          </div>
          <Languaes/>
          <Contacts/>
        </div>
        <div className="about-page_main">
          <TechnicalSkills/>
          <Software/>
        </div>
      </div>
  );
}

export default About;