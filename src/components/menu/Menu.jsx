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
  console.log(page);

  return (
    <div className="menu">

      <nav>
        <ul>
          <li>
            <Link className={`page ${page === "inicio" ? "current" : " "}`} to="/" onClick={() => setPage("inicio")}>
              <AiOutlineHome />
              Início
            </Link>
          </li>
        </ul>

        <p>Eu</p>

        <ul>
          <li>

            <Link className={`page ${page === "sobre" ? "current" : " "}`} to="/sobre-mim" onClick={() => setPage("sobre")}>
              <PiBookOpenBold />
              Sobre mim
            </Link>
          </li>
          <li>
            <Link className={`page ${page === "projetos" ? "current" : " "}`} to="/projetos" onClick={() => setPage("projetos")}>
              <GoFileDirectory />
              Projetos
            </Link>
          </li>
          <li>

            <Link className={`page ${page === "skills" ? "current" : " "}`} to="tecnologias-e-ferramentas" onClick={() => setPage("skills")}>
              <MdOutlineComputer />
              Tecnologias e Ferramentas
            </Link>
          </li>
        </ul>

        <p>Redes Sociais</p>

        <ul>
          <li>
            <Link className="page" to="https://github.com/AlexssandroSilvaGomes" target="_blank">
              <RiGithubLine />
              Github
              <RiExternalLinkFill className="external" />
            </Link>
          </li>
          <li>

            <Link className="page" to="https://www.linkedin.com/in/alexssandro-gomes-6461bb151/" target="_blank">
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