import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { ThemeContext } from "../../data/hooks/context/ThemeContext"

import Menu from "../../components/menu/Menu"

import './App.css'

const App = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <div className={`app ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
        <Menu className="menu" />
        <Outlet className="main" />
    </div>
  )
}

export default App