//This is a custom hook created to use useDebugValue()!!!

import { useState, useDebugValue } from "react";

export default function useTheme() {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => setDarkTheme(!darkTheme);

    useDebugValue(`theme:${darkTheme ? "dark" : "light"}`);

    return {
        darkTheme, toggleTheme,
    }
}