import propTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  console.log(theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: propTypes.node,
};

export function useTheme() {
  return useContext(ThemeContext);
}
