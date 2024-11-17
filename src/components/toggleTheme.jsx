import { useReducer, createContext, useEffect } from "react";

const ThemeToggleContext = createContext();

function reducer(state, action) {
  switch (action) {
    case "light":
      return "dark";

    case "dark":
      return "light";

    default:
      return state;
  }
}

function ToggleTheme({ children }) {

  const initialTheme = localStorage.getItem('theme') || 'light'

  const [theme, dispatch] = useReducer(reducer, initialTheme);

  useEffect(() => {
    localStorage.setItem('theme',theme)
    document.body.className = theme;
  }, [theme]);
  return (
    <ThemeToggleContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeToggleContext.Provider>
  );
}

export { ToggleTheme, ThemeToggleContext };
