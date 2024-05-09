import './ButtonTheme.css'

const ButtonTheme = ({toggleTheme, isChecked}) => {
    return (
        <label id="switch" className="switch">
            <input type="checkbox" onClick={toggleTheme} defaultChecked={isChecked} id="slider" />
            <span className="slider round"></span>
        </label>
    )
}

export default ButtonTheme