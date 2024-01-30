import {Link} from 'react-router-dom'
import { RiGithubLine } from "react-icons/ri"; //github
import { RiExternalLinkFill } from "react-icons/ri"; //external link

import './ButtonsProject.css'

const ButtonsProject = ({linkVisit, linkCode}) => {
    return (
        <div className="projeto-btns">
            <Link className="projeto-btns--visitar" to={linkVisit} target='_blank'>
                Visitar
                <RiExternalLinkFill />
            </Link>
            <Link className="projeto-btns--codigo" to={linkCode} target='_blank'>
                <RiGithubLine />
                Código-fonte
            </Link>
        </div>
    )
}

export default ButtonsProject