import { createContext } from "react";
import useTheme from '../hooks/useTheme'

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
    // LINES MOVED TO useTheme.js custom hook to allowing use of useDebugValue() function  
    // const [darkTheme, setDarkTheme] = useState(false);
    // const toggleTheme = () => setDarkTheme(!darkTheme);

    const value = useTheme();

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}