import Languaes from "./Languaes";
import TechSkills from "./TechSkills";
import RelevantExpirience from "./RelevantExpirience";

function Skills() {
  return ( 
    <div className="skills-container">
      <TechSkills />
      <Languaes />
      <RelevantExpirience />
    </div>
    );
}

export default Skills;
