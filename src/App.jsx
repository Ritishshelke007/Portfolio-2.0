import "./App.css";
import { useState, useEffect } from "react";
import { Navbar, Hero, About, Projects } from "./components";
import { ThemeProvider } from "./context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual logic
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      
    </ThemeProvider>
  );
}

export default App;
