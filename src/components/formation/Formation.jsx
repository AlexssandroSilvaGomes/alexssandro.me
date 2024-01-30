import './Formation.css'

const Formation = ({img, title, course, desc}) => {
  return (
    <div className="formation">
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