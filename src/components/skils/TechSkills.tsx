import SkillBootstrap from "./skills-items/tech-skills/SkillBootstrap";
import SkillCss from "./skills-items/tech-skills/SkillCss";
import SkillExpress from "./skills-items/tech-skills/SkillExpress";
import SkillFigma from "./skills-items/tech-skills/SkillFigma";
import SkillGit from "./skills-items/tech-skills/SkillGit";
import SkillHtml from "./skills-items/tech-skills/SkillHtml";
import SkillJs from "./skills-items/tech-skills/SkillJs";
import SkillNode from "./skills-items/tech-skills/SkillNode";
import SkillReact from "./skills-items/tech-skills/SkillReact";
import SkillScss from "./skills-items/tech-skills/SkillScss";
import SkillTs from "./skills-items/tech-skills/SkillTs";
import SkillWebpack from "./skills-items/tech-skills/SkillWebpack";

function TechSkills() {
  return ( 
    <div className="skills">
      <p>Tech-Stack</p>
      <div className="skills-container_tech">
        <SkillHtml />
        <SkillCss />
        <SkillJs />
        <SkillTs />
        <SkillReact />
        <SkillScss />
        <SkillFigma />
        <SkillGit />
        <SkillBootstrap />
        <SkillWebpack />
        <SkillNode />
        <SkillExpress />
      </div>
    </div>
    );
}

export default TechSkills;

{/* 
<li>Express</li>
<li>NestJS</li>
<li>Mongoose</li>
<li>npm</li>
<li>PostgreSQL</li>
<li>TypeORM</li> */}