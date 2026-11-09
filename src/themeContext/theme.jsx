import { createContext, useState } from "react"

export const ThemeContext = createContext()
export default function Theme({ children }) {
    const [darkMode, setDarkMode] = useState(true)

    const toggle = () => {
        setDarkMode((prev) => !prev)

    }
    return (
        <>
            <ThemeContext.Provider value={{ darkMode, toggle }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}