import { useContext } from "react";
import { ThemeContext } from "../../data/hooks/context/ThemeContext";

import './Formation.css'

const Formation = ({img, title, course, desc}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`formation ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
          <div className="formation_img">
            <img src={img} alt="foto mamaco" />
          </div>
          <div className="formation_info">
            <h3 className="formation_info--title">{title}</h3>
            <p>{course}</p>
            <p>{desc}</p>
          </div>
        </div>
  )
}

export default Formation