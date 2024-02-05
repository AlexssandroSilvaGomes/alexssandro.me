import { Link } from "react-router-dom"
import { ThemeContext } from "../../data/hooks/context/ThemeContext";
import { useContext } from "react";

import './ContentHeader.css'

const ContentHeader = ({title, link, text, page}) => {
  const {handlePage} = useContext(ThemeContext)
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`header-content ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
            <h3>{title}</h3>
            <Link to={link} onClick={() => handlePage(page)}>{text}</Link>
          </div>
  )
}

export default ContentHeader