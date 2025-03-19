import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaList } from "react-icons/fa";
import DropdownPage from "./Home";
import "./App.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
          <div className="sidebar-header">
            {isSidebarOpen && <h2>Dashboard</h2>}
            <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <FaBars />
            </button>
          </div>

          <nav>
            <Link to="/dropdown" className="nav-link">
              <FaList className="nav-icon" />
              {isSidebarOpen && <span className="nav-text">Dropdown Page</span>}
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className={`main-content ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
          <header className="header">Page Header</header>

          {/* Routes */}
          <div className="content">
            <Routes>
              <Route path="/dropdown" element={<DropdownPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
