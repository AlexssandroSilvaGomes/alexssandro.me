import { useState } from "react"
import ButtonsProject from "../../components/buttonsProject/ButtonsProject"

import './ProjectCard.css'

const ProjectCard = ({img, title, desc, tecs, linkVisit, linkCode, enableBorderCard}) => {
    const [expand, setExpand] = useState(false)

    const handleExpand = () => {
        setExpand(!expand)
    }

    return (
        <div className={`projeto ${enableBorderCard ? 'borderCard' : ''}`}>
            <img className={`projeto_img ${expand ? "img_expandida" : ""}`} src={img} alt="" onClick={() => handleExpand()}/>
            <div className="projeto-conteudo">
                <p className="projeto-conteudo--title">{title}</p>
                <p>{desc}</p>
                <div className="projeto-conteudo_tecs">
                    <p>Tecnologias utilizadas:</p>
                    <div className="projeto-conteudo_tecs--tecs">
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