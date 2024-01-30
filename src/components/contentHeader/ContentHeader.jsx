import { Link } from "react-router-dom"
import { ThemeContext } from "../../data/hooks/context/ThemeContext";
import { useContext } from "react";

import './ContentHeader.css'

const ContentHeader = ({title, link, text, page}) => {
  const {setPage} = useContext(ThemeContext)
  return (
    <div className="header-content">
            <h3>{title}</h3>
            <Link to={link} onClick={() => setPage(page)}>{text}</Link>
          </div>
  )
}

export default ContentHeader