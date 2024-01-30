import './Tecnology.css'

const Tecnology = ({img, name}) => {
    return (
        <div className="tecnologia">
            <div className="tecnologia_icon">
                <img src={img} alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default Tecnology