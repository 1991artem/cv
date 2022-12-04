import { ExperienceType } from "../types/types";
import ExpItem from "./ExpItem";

function Experience() {

  return ( 
    <div className="experience">
      <p className="experience_title">PROFESSIOANL EXPERIENCE</p>
      {
        workArray.map((item: ExperienceType) =>( <ExpItem data={item} key={Date.now()}/>))
      }
      <p className="experience_title">EDUCATION</p>
      {
        educationArray.map((item: ExperienceType) =>( <ExpItem data={item} key={Date.now()}/>))
      }
    </div>
    );
}

export default Experience;


const workArray: ExperienceType[] = [
  {
    'Company': 'NP LLC "AKOVA',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2011-2022',
    'Description': '',
    'Position': 'Lead Engineer',
    'Technologies': ['AutoСad', 'Windows', 'MS Word', 'MS Exel', 'Solid Works'],
  }
]

const educationArray: ExperienceType[] = [
  {
    'Company': 'Pixelpex',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2022',
    'Description': '',
    'Position': 'Trainee',
    'Technologies': ['Node.js (Express, NestJS)', 'REST API', 'GitHub', 'Typescript', 'Postman', 'PostgreSQL', 'MongoDB', 'TypeORM'],
  },
  {
    'Company': 'RS School (EPAM)',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2022',
    'Description': '',
    'Position': 'Student',
    'Technologies': ['React.js', 'Node.js (Express)', 'Javascript ES6+', 'Typescript', 'GitHub', 'Webpack', 'HTML', 'SCSS/CSS', 'DOM'],
  },
  {
    'Company': 'IT-Logia',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2022',
    'Description': '',
    'Position': 'Student',
    'Technologies': ['Angular ', 'Typescript', 'HTML', 'SCSS/CSS'],
  },
  {
    'Company': 'Belarusian National Technical University',
    'Company Location': 'Belarus, Minsk',
    'Duration': '2008 - 2013',
    'Description': '',
    'Position': 'Student / Engineer',
    'Technologies': [],
  },
]