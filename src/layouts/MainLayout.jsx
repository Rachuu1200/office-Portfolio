import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const location = useLocation();

  // Check if we are inside a profile page (/team/:id)
  const isProfilePage = location.pathname.startsWith("/team/") && location.pathname.split("/").length === 3;

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} isProfilePage={isProfilePage} />

      {/* ALL pages render here */}
      <Outlet context={{ darkMode }} />

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default MainLayout;
