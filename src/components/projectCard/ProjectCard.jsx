import ButtonsProject from "../../components/buttonsProject/ButtonsProject"
import { useState, useContext } from "react";
import { ThemeContext } from "../../data/hooks/context/ThemeContext";

import './ProjectCard.css'

const ProjectCard = ({img, title, desc, tecs, linkVisit, linkCode, enableBorderCard}) => {
    const [expand, setExpand] = useState(false)
    const {theme} = useContext(ThemeContext)

    const handleExpand = () => {
        setExpand(!expand)
    }

    return (
        <div className={`projeto ${theme === "dark" ? "dark-theme" : "light-theme"} ${enableBorderCard ? 'borderCard' : ''}`}>
            <img className={`projeto_img ${expand ? "img_expandida" : ""}`} src={img} alt="" onClick={() => handleExpand()}/>
            <div className="projeto-conteudo">
                <p className="projeto-conteudo--title">{title}</p>
                <p>{desc}</p>
                <div className="projeto-conteudo_tecs">
                    <p>Tecnologias utilizadas:</p>
                    <div className={`projeto-conteudo_tecs--tecs ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
                        {tecs.map((tec) => (
                            <p key={tec}>{tec}</p>
                        ))}
                    </div>
                </div>
                <ButtonsProject linkVisit={linkVisit} linkCode={linkCode} />
            </div>
        </div>
    )
}

export default ProjectCard