import { Link } from 'react-router-dom'
import { useState, useContext } from "react";
import { ThemeContext } from "../../data/hooks/context/ThemeContext";
import ProjectCard from "../../components/projectCard/ProjectCard"

import Dnd from './images/project-dnd.png'
import Multistep from './images/project-multistep.png'
import Todo from './images/project-todo.png'
import Quiz from './images/project-quiz.png'

import './Projects.css'

const Projects = () => {
  const [enable, setEnable] = useState(true)
  const reactVite = ["ReactJS", "Vite", "HTML", "CSS", "JavaScript"]
  const api = ["HTML", "CSS", "JavaScript", "Api"]
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`projects ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <div className={`projects_header ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
        <h1>Meus Projetos</h1>
        <p>Estes são alguns dos meus projetos. Você pode encontrar esses e outros projetos no meu <Link to="https://github.com/AlexssandroSilvaGomes" target="_blank">github</Link>.</p>
      </div>
      <div className="projects_content">
        <ProjectCard
          img={Dnd}
          title={"API Dungeon and Dragons"}
          desc={"Projeto pessoal desenvolvido durante o curso de DS no Senai com o objetivo de consumir uma api pública."}
          tecs={api}
          linkVisit={"https://dungeonanddragons.netlify.app/"}
          linkCode={"https://github.com/AlexssandroSilvaGomes/api-dungeons-and-dragons"}
          enableBorderCard={enable}
        />

        <ProjectCard
          img={Multistep}
          title={"Formulário de avaliação multistep"}
          desc={"Projeto acadêmico do canal Matheus Battisti com foco em entender melhor a utilização de hooks para persistência de dados no ReactJS com Vite."}
          tecs={reactVite}
          linkVisit={"https://alexssandrosilvagomes.github.io/multistep_react_vite_form/"}
          linkCode={"https://github.com/AlexssandroSilvaGomes/multistep_react_vite_form"}
          enableBorderCard={enable}
        />

        <ProjectCard
          img={Todo}
          title={"Lista To-Do em ReactJS"}
          desc={"Projeto acadêmico do canal Matheus Battisti com foco em entender melhor os 'states' e componentização no ReactJS com Vite."}
          tecs={reactVite}
          linkVisit={"https://alexssandrosilvagomes.github.io/todo_react_vite/"}
          linkCode={"https://github.com/AlexssandroSilvaGomes/todo_react_vite"}
          enableBorderCard={enable}
        />

        <ProjectCard
          img={Quiz}
          title={"Quiz Front-end"}
          desc={"Projeto acadêmico do canal Matheus Battisti com foco em aplicar conceitos básicos de ReactJS com Vite."}
          tecs={reactVite}
          linkVisit={"https://alexssandrosilvagomes.github.io/quiz_react_vite_deploy/"}
          linkCode={"https://github.com/AlexssandroSilvaGomes/quiz_react_vite_deploy"}
          enableBorderCard={enable}
        />
      </div>
    </div>
  )
}

export default Projects