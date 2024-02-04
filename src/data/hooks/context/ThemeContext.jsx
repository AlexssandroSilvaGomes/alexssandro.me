import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("dark")
    const [page, setPage] = useState(window.localStorage.getItem("currentPage") === null ? "inicio" : window.localStorage.getItem("currentPage"))

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    const handlePage = (current) => {
        setPage(page !== current ? current : page)
        window.localStorage.setItem("currentPage", current)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, page, handlePage}}>
            {children}
        </ThemeContext.Provider>
    )
}