import { Link } from "react-router-dom"

import './ContentHeader.css'

const ContentHeader = ({title, link, text}) => {
  return (
    <div className="header-content">
            <h3>{title}</h3>
            <Link to={link}>{text}</Link>
          </div>
  )
}

export default ContentHeader