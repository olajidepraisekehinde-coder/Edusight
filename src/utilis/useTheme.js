import { useContext } from "react";
import { ThemeContext } from "../themeContext/theme";

export function UseTheme() {
    const User = useContext(ThemeContext)
    return User;
}