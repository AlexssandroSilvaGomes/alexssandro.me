import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../data/hooks/context/ThemeContext";

import { AiOutlineHome } from "react-icons/ai"; //home
import { PiBookOpenBold } from "react-icons/pi"; //aboutme
import { GoFileDirectory } from "react-icons/go"; //project
import { MdOutlineComputer } from "react-icons/md"; //skills
import { RiExternalLinkFill } from "react-icons/ri"; //external link
import { SlSocialLinkedin } from "react-icons/sl"; //linkedin
import { RiGithubLine } from "react-icons/ri"; //github



import './Menu.css'


const Menu = () => {
  const {page, setPage} = useContext(ThemeContext)

  return (
    <div className="menu">

      <nav>
        <ul>
          <li>
            <Link className={`${page === "inicio" ? "current" : "button"}`} to="/" onClick={() => setPage("inicio")}>
              <AiOutlineHome />
              Início
            </Link>
          </li>
        </ul>

        <p>Eu</p>

        <ul>
          <li>

            <Link className={`${page === "sobre" ? "current" : "button"}`} to="/sobre-mim" onClick={() => setPage("sobre")}>
              <PiBookOpenBold />
              Sobre mim
            </Link>
          </li>
          <li>
            <Link className={`${page === "projetos" ? "current" : "button"}`} to="/projetos" onClick={() => setPage("projetos")}>
              <GoFileDirectory />
              Projetos
            </Link>
          </li>
          <li>

            <Link className={`${page === "skills" ? "current" : "button"}`} to="tecnologias-e-ferramentas" onClick={() => setPage("skills")}>
              <MdOutlineComputer />
              Tecnologias e Ferramentas
            </Link>
          </li>
        </ul>

        <p>Redes Sociais</p>

        <ul>
          <li>
            <Link className="button" to="https://github.com/AlexssandroSilvaGomes" target="_blank">
              <RiGithubLine />
              Github
              <RiExternalLinkFill className="external" />
            </Link>
          </li>
          <li>

            <Link className="button" to="https://www.linkedin.com/in/alexssandro-gomes-6461bb151/" target="_blank">
              <SlSocialLinkedin />
              Linkedin
              <RiExternalLinkFill className="external" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu