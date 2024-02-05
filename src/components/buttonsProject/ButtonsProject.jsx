import {Link} from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "../../data/hooks/context/ThemeContext";
import { RiGithubLine } from "react-icons/ri"; //github
import { RiExternalLinkFill } from "react-icons/ri"; //external link

import './ButtonsProject.css'

const ButtonsProject = ({linkVisit, linkCode}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="projeto-btns">
            <Link className={`projeto-btns--visitar ${theme === "dark" ? "dark-theme" : "light-theme"}`} to={linkVisit} target='_blank'>
                Visitar
                <RiExternalLinkFill />
            </Link>
            <Link className={`projeto-btns--codigo ${theme === "dark" ? "dark-theme" : "light-theme"}`} to={linkCode} target='_blank'>
                <RiGithubLine />
                Código-fonte
            </Link>
        </div>
    )
}

export default ButtonsProject