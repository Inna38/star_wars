import { useContext, useState } from "react";
import { createContext } from "react";
import cgangeCssVariable from "../services/cgangeCssVariable";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const THEME_NEITRAL = "neitral";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);

  const changeTheme = (name) => {
    setTheme(name);
    cgangeCssVariable(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        change: changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
