import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(window.localStorage.getItem("currentTheme") === null ? "dark" : window.localStorage.getItem("currentTheme"))
    const [page, setPage] = useState(window.localStorage.getItem("currentPage") === null ? "/" : window.localStorage.getItem("currentPage"))
    const [isOpen, setIsOpen] = useState(false)

    const toggleTheme = (current) => {
        setTheme(theme === current ? theme : current)
        window.localStorage.setItem("currentTheme", current)
    }

    const handlePage = (current) => {
        setPage(page !== current ? current : page)
        window.localStorage.setItem("currentPage", current)
        setIsOpen(false)
    }

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
      }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, page, handlePage, isOpen, handleOpenMenu}}>
            {children}
        </ThemeContext.Provider>
    )
}