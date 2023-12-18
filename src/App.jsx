import "./App.css";
import { useState, useEffect } from "react";
import { Navbar, Hero, About, Projects, Contact } from "./components";
import { ThemeProvider } from "./context/Theme";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
