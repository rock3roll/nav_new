import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaWpforms, FaBars,FaMoon, FaSun  } from "react-icons/fa";
import "./App.css";

import FormPage from "./Form";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Router>
      <div className={`app-container ${isCollapsed ? "collapsed" : ""} ${darkMode ? "dark" : ""}`}>
        {/* Sidebar */}
        <div className={`sidebar`}>
          <div className="sidebar-header">
            {!isCollapsed && <span className="page-title">Dashboard</span>}
            <button className="btn toggle-btn" onClick={toggleSidebar}>
            <FaBars className="toggle-icon" />
            </button>
            <button className="btn theme-btn" onClick={toggleTheme}>
              {darkMode ? <FaSun/>: <FaMoon/>   }
            </button>
          </div>

          {/* Navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-item">
            <FaHome className="nav-icon" /> {!isCollapsed && "Home"}
            </Link>
            <Link to="/form" className="nav-item">
            <FaWpforms className="nav-icon" /> {!isCollapsed && "Form"}
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <header className="fixedß-header">DBA Automation Tool</header>
          <div className="content-area">
            <Routes>
              <Route path="/" />
              <Route path="/form" element={<FormPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
