import { Link } from "react-router-dom"
import Formation from "../../components/formation/Formation"
import ContentHeader from "../../components/contentHeader/ContentHeader"
import ProjectCard from "../../components/projectCard/ProjectCard"
import { LuDownload } from "react-icons/lu";
import { useState, useContext } from "react";
import { ThemeContext } from "../../data/hooks/context/ThemeContext";

import Foto2 from './images/foto2.jpg'
import Senai from './images/senai_image.png'
import Fatec from './images/fatec-image2.jpg'
import Dnd from '../projects/images/project-dnd.png'
import Multistep from '../projects/images/project-multistep.png'
import Todo from '../projects/images/project-todo.png'
import Quiz from '../projects/images/project-quiz.png'

import './Home.css'

const Home = () => {
  const reactVite = ["ReactJS", "Vite", "HTML", "CSS", "JavaScript"]
  const api = ["HTML", "CSS", "JavaScript", "Api"]
  const [enable] = useState(false)
  const {theme} = useContext(ThemeContext)

  const url = 'https://alexssandro-me.vercel.app/curriculo_alexssandro_.pdf'

  const downloadFile = (url) => {
    const fileName = url.split('/').pop()
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className={`home ${theme === "dark" ? "dark-theme" : "light-theme"}`}>

      <div className="header">
        <img src={Foto2} alt="foto mamaco" />
        <div className={`content ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
          <h3></h3>
          <div className={`skills ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
            <p>ReactJS</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>NodeJS</p>
          </div>
        </div>
      </div>

      <div className="sobre">
        <ContentHeader title={"Sobre mim"} link={"sobre-mim"} text={"Saber mais"} page={"sobre-mim"}/>
        <p>Oi, me chamo Alexssandro, sou desenvolvedor fullstack recém formado com foco em desenvolvimento web. Apesar de não ter experiência, tive a oportunidade de participar de projetos acadêmicos complexos, como o desenvolvimento de aplicativos, softwares simples e sites. Sou formado em Técnico em Desenvolvimento de Sistemas pelo Senai e atualmente estou cursando Análise e Desenvolvimento de Sistemas na FATEC. Tenho grande conhecimento em NodeJS e ReactJS.</p>
      </div>

      <div className="infos">
        <div className="formacao">
          <ContentHeader title={"Formação Acadêmica"} link={"sobre-mim"} text={"Saber mais"} page={"sobre-mim"}/>
          <Formation
            img={Fatec}
            title={"Fatec - Carapicuíba"}
            course={"Tecnólogo em Análise e Desenvolvimento de Sistemas"}
            desc={"2023 - Atualmente | 12 meses"}
          />
          <Formation
            img={Senai}
            title={"Escola SENAI “Professor Vicente Amato”"}
            course={"Técnico de Desenvolvimento de Sistemas"}
            desc={"2022 - 2023 | 1 ano e 5 meses"}
          />
          <Formation
            img={Senai}
            title={"Desembargador Manuel Augusto Vieira Neto"}
            course={"Ensino Médio completo"}
            desc={"2018 - 2021 | 3 anos"}
          />
          <Link className="curriculo" onClick={() => downloadFile(url)}>
            Baixar meu currículo
            <LuDownload />
          </Link>
        </div>

        <div className="experiencias">
          <ContentHeader title={"Experiências"} link={"sobre-mim"} text={"Saber mais"} page={"sobre-mim"}/>
          <div className="experiencias--text">
            <p>Ainda não tenho nenhuma experiência relevante!</p>
          </div>
        </div>
      </div>

      <div className="projetos-home fadeIn">
        <ContentHeader title={"Projetos"} link={"projetos"} text={"Ver todos"} page={"projetos"}/>

        <div className="projetos">

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

    </div>
  )
}

export default Home