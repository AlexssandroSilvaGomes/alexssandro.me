import ButtonsProject from "../../components/buttonsProject/ButtonsProject"

import './ProjectCard.css'

const ProjectCard = ({img, title, desc, tecs, linkVisit, linkCode, enableBorderCard}) => {
    return (
        <div className={`projeto ${enableBorderCard ? 'borderCard' : ''}`}>
            <img src={img} alt="" />
            <div className="projeto-conteudo">
                <p className="projeto-conteudo--title">{title}</p>
                <p>{desc}</p>
                <div className="projeto-conteudo_tecs">
                    <p>Tecnologias utilizadas:</p>
                    <div className="projeto-conteudo_tecs--tecs">
                        {tecs.map((tec) => (
                            <p>{tec}</p>
                        ))}
                    </div>
                </div>
                <ButtonsProject linkVisit={linkVisit} linkCode={linkCode} />
            </div>
        </div>
    )
}

export default ProjectCard