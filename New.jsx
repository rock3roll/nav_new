import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaBars } from "react-icons/fa";
import "./App.css";

const employeeData = [
  {
    id: 1,
    name: "Alice Johnson",
    dept: "HR",
    doj: "2022-05-15",
    position: "Manager",
  },
  {
    id: 2,
    name: "Bob Smith",
    dept: "IT",
    doj: "2023-01-10",
    position: "Developer",
  },
  {
    id: 3,
    name: "Carol White",
    dept: "Finance",
    doj: "2021-03-22",
    position: "Analyst",
  },
];

const Header = ({ onToggleSidebar }) => (
  <header className="header">
    <FaBars className="menu-icon" onClick={onToggleSidebar} />
    Employee Portal
  </header>
);

const Sidebar = ({ toggleSidebar, active, setActive }) => (
  <aside className={`sidebar ${toggleSidebar ? "open" : "collapsed"}`}>
    <ul>
      <li
        onClick={() => setActive("link1")}
        className={active === "link1" ? "active" : ""}
      >
        Link 1
      </li>
      <li
        onClick={() => setActive("link2")}
        className={active === "link2" ? "active" : ""}
      >
        Link 2
      </li>
    </ul>
  </aside>
);

const Link1 = () => {
  const [dept, setDept] = useState("");
  const [positions, setPositions] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredData, setFilteredData] = useState({});
  const [selectedPosition, setSelectedPosition] = useState(null);

  const allPositions = [...new Set(employeeData.map((e) => e.position))];

  const handleCheckboxChange = (position) => {
    setPositions((prev) =>
      prev.includes(position)
        ? prev.filter((p) => p !== position)
        : [...prev, position]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = employeeData;

    if (dept) data = data.filter((emp) => emp.dept === dept);

    if (filterType === "specific") {
      data = data.filter((emp) => {
        const doj = new Date(emp.doj);
        return doj >= new Date(fromDate) && doj <= new Date(toDate);
      });
    }

    const grouped = {};
    positions.forEach((pos) => {
      grouped[pos] = data.filter((emp) => emp.position === pos);
    });
    setFilteredData(grouped);
    setSelectedPosition(null);
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const requestData = {
      dept,
      positions,
      filterType,
      fromDate: filterType === "specific" ? fromDate : null,
      toDate: filterType === "specific" ? toDate : null,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/filter-employees",
        requestData
      );
      const data = response.data;
      setFilteredData(data);
      setSelectedPosition(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Optional: show an error message to user
    }
  };

  const columns = [
    { name: "ID", selector: (row) => row.id },
    { name: "Name", selector: (row) => row.name },
    { name: "Department", selector: (row) => row.dept },
    { name: "Date of Join", selector: (row) => row.doj },
    { name: "Position", selector: (row) => row.position },
  ];

  return (
    <div className="content">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Department:
          <select value={dept} onChange={(e) => setDept(e.target.value)}>
            <option value="">--Select--</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
          </select>
        </label>

        <div>
          <span>Position:</span>
          <div className="checkbox-group">
            {allPositions.map((pos) => (
              <label key={pos}>
                <input
                  type="checkbox"
                  checked={positions.includes(pos)}
                  onChange={() => handleCheckboxChange(pos)}
                />
                {pos}
              </label>
            ))}
          </div>
        </div>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="all"
              checked={filterType === "all"}
              onChange={() => setFilterType("all")}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="specific"
              checked={filterType === "specific"}
              onChange={() => setFilterType("specific")}
            />
            Specific Date
          </label>
        </div>

        {filterType === "specific" && (
          <div className="date-range">
            <label>
              From:{" "}
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </label>
            <label>
              To:{" "}
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </label>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>

      {Object.keys(filteredData).length > 0 && (
        <div className="position-buttons">
          {Object.keys(filteredData).map((pos) => (
            <button key={pos} onClick={() => setSelectedPosition(pos)}>
              {pos}
            </button>
          ))}
        </div>
      )}

      {selectedPosition && (
        <DataTable
          columns={columns}
          data={filteredData[selectedPosition]}
          pagination
          title={`Employees - ${selectedPosition}`}
        />
      )}
    </div>
  );
};

const Link2 = () => <div className="content">Link 2 Content</div>;

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [active, setActive] = useState("link1");

  const handleToggleSidebar = () => setToggleSidebar(!toggleSidebar);

  return (
    <div
      className={`app ${toggleSidebar ? "sidebar-open" : "sidebar-collapsed"}`}
    >
      <Header onToggleSidebar={handleToggleSidebar} />
      <div className="main">
        <Sidebar
          toggleSidebar={toggleSidebar}
          active={active}
          setActive={setActive}
        />
        <div className="page">{active === "link1" ? <Link1 /> : <Link2 />}</div>
      </div>
    </div>
  );
};

export default App;

import axios from "axios";
