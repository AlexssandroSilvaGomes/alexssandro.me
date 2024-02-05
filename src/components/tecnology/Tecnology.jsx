import { useContext } from "react";
import { ThemeContext } from "../../data/hooks/context/ThemeContext";

import './Tecnology.css'

const Tecnology = ({img, name}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`tecnologia ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
            <div className="tecnologia_icon">
                <img src={img} alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default Tecnology