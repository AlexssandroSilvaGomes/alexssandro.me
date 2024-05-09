import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../data/hooks/context/ThemeContext";

import { IoMenu } from "react-icons/io5";
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
  const {isOpen, handleOpenMenu} = useContext(ThemeContext)
  const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaTela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const tamanhoMinimo = 768; 

  return (
    <>
      <div className="menu-hamburger">
        <ButtonTheme className="btn" toggleTheme={() => toggleTheme(theme === "light" ? "dark" : "light")} isChecked={theme === "dark" ? false : true}/>
        <Link onClick={() => handleOpenMenu(!isOpen)} to={page}>
          <IoMenu />
        </Link>
      </div>

      <div className={`menu ${theme === "dark" ? "dark-theme" : "light-theme"} ${isOpen ? "open" : "closed"}`}>
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
        {larguraDaTela >= tamanhoMinimo && (
          <ButtonTheme className="btn" toggleTheme={() => toggleTheme(theme === "light" ? "dark" : "light")} isChecked={theme === "dark" ? false : true}/>
        )}
      </div>
    </>
  )
}

export default Menu