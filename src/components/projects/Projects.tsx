import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import NavigateHeader from "../nav/Nav";
import { ProjectType } from "../types/types";
import ProjectItem from "./ProjectItem";

const workArray: ProjectType[] = [
  {
    'Name': 'TODOS (Express)',
    'GitHub': 'https://github.com/1991artem/pixelplex_todo',
    'Deploy': '',
    'Description': '',
    'Technologies': ['Node.js (Express)', 'REST API', 'GitHub', 'Typescript', 'Postman', 'PostgreSQL', 'TypeORM'],
  },
  {
    'Name': 'File Uploder, PDF-converter (NestJS)',
    'GitHub': 'https://github.com/1991artem/nest-file-test',
    'Deploy': '',
    'Description': '',
    'Technologies': ['Node.js (NestJS)', 'REST API', 'GitHub', 'Typescript', 'Postman', 'PostgreSQL', 'TypeORM'],
  },
  {
    'Name': 'TODOS (React Native)',
    'GitHub': 'https://github.com/1991artem/slmax-testovoe-zadanie',
    'Deploy': '',
    'Description': '',
    'Technologies': ['React Native', 'Typescript', 'GitHub'],
  },
  {
    'Name': 'TODOS (React)',
    'GitHub': 'https://github.com/1991artem/todo-tags',
    'Deploy': '',
    'Description': '',
    'Technologies': ['React', 'Typescript', 'GitHub', 'HTML', 'SCSS/CSS'],
  },
  {
    'Name': 'Online-Shop (React)',
    'GitHub': 'https://github.com/1991artem/sw-task-shop-react/tree/develop',
    'Deploy': '',
    'Description': '',
    'Technologies': ['React', 'Typescript', 'GitHub', 'HTML', 'SCSS/CSS'],
  },
]


function Projects() {
  const [project, setProject] = useState([] as ProjectType[])

  useEffect(()=>{
    setProject(workArray)
  }, [])
  return ( 
    <div className="projects">
      <NavigateHeader />
      <p className="projects_title">MY PROJECTS</p>
      {
        project.map((item: ProjectType) => <ProjectItem data={item} key={Date.now()} />)
      }
      <Footer />
    </div>
    );
}

export default Projects;