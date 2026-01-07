import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* ALL pages render here */}
      <Outlet context={{ darkMode }} />

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default MainLayout;
