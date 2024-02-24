"use client"

import { ReactNode, createContext, useContext, useState } from "react"; 

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

interface ChildrenProps {
    children: ReactNode;
}

const defaultValue: ThemeContextProps = {
    theme: 'default',
    toggleTheme: () => {}
}

const ThemeContext = createContext<ThemeContextProps>(defaultValue);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider ({ children }: ChildrenProps) {
    const [theme, setTheme] = useState('default');

    function toggleTheme() {
        setTheme((currentTheme) => (currentTheme === 'default' ? 'dark' : 'default'));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}