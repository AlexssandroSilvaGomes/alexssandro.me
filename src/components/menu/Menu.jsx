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
import ButtonTheme from "../buttonTheme/ButtonTheme";


const Menu = () => {
  const {page, handlePage} = useContext(ThemeContext)
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={`menu ${theme === "dark" ? "dark-theme" : "light-theme"}`}>

      <nav>
        <ul>
          <li>
            <Link className={`${page === "/" ? "current" : "button"} ${theme === "dark" ? "dark-theme" : "light-theme"}`} to="/" onClick={() => handlePage("/")}>
              <AiOutlineHome />
              Início
            </Link>
          </li>
        </ul>

        <p>Eu</p>

        <ul>
          <li>

            <Link className={`${page === "sobre-mim" ? "current" : "button"} ${theme === "dark" ? "dark-theme" : "light-theme"}`} to="/sobre-mim" onClick={() => handlePage("sobre-mim")}>
              <PiBookOpenBold />
              Sobre mim
            </Link>
          </li>
          <li>
            <Link className={`${page === "projetos" ? "current" : "button"} ${theme === "dark" ? "dark-theme" : "light-theme"}`} to="/projetos" onClick={() => handlePage("projetos")}>
              <GoFileDirectory />
              Projetos
            </Link>
          </li>
          <li>

            <Link className={`${page === "tecnologias-e-ferramentas" ? "current" : "button"} ${theme === "dark" ? "dark-theme" : "light-theme"}`} to="tecnologias-e-ferramentas" onClick={() => handlePage("tecnologias-e-ferramentas")}>
              <MdOutlineComputer />
              Tecnologias e Ferramentas
            </Link>
          </li>
        </ul>

        <p>Redes Sociais</p>

        <ul>
          <li>
            <Link className={`button ${theme === "dark" ? "dark-theme" : "light-theme"}`} to="https://github.com/AlexssandroSilvaGomes" target="_blank">
              <RiGithubLine />
              Github
              <RiExternalLinkFill className="external" />
            </Link>
          </li>
          <li>

            <Link className={`button ${theme === "dark" ? "dark-theme" : "light-theme"}`} to="https://www.linkedin.com/in/alexssandro-gomes-6461bb151/" target="_blank">
              <SlSocialLinkedin />
              Linkedin
              <RiExternalLinkFill className="external" />
            </Link>
          </li>
        </ul>
      </nav>
        <ButtonTheme className="btn" toggleTheme={() => toggleTheme(theme === "light" ? "dark" : "light")} isChecked={theme === "dark" ? false : true}/>
    </div>
  )
}

export default Menu