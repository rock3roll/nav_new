import React from "react";
import "./new.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>My Website</h1>
      </header>

      <main className="main">
        {/* Logo + Overview */}
        <section className="logo-overview">
          <div className="logo">
            <img
              src="https://icons.veryicon.com/png/o/internet--web/2022-alibaba-cloud-product-icon-cloud/cbs-database-backup.png"
              alt="Logo"
              className="logo-img"
            />
          </div>
          <p className="overview">
            Welcome to our platform – your gateway to powerful features and
            tools. Welcome to our platform – your gateway to powerful features
            and tools. Welcome to our platform – your gateway to powerful
            features and tools. Welcome to our platform – your gateway to
            powerful features and tools. Welcome to our platform – your gateway
            to powerful features and tools. Welcome to our platform – your
            gateway to powerful features and tools. Welcome to our platform –
            your gateway to powerful features and tools. Welcome to our platform
            – your gateway to powerful features and tools. Welcome to our
            platform – your gateway to powerful features and tools. Welcome to
            our platform – your gateway to powerful features and tools. Welcome
            to our platform – your gateway to powerful features and tools.
            Welcome to our platform – your gateway to powerful features and
            tools. Welcome to our platform – your gateway to powerful features
            and tools. Welcome to our platform – your gateway to powerful
            features and tools. Welcome to our platform – your gateway to
            powerful features and tools. Welcome to our platform – your gateway
            to powerful features and tools. Welcome to our platform – your
            gateway to powerful features and tools. Welcome to our platform –
            your gateway to powerful features and tools. Welcome to our platform
            – your gateway to powerful features and tools. Welcome to our
            platform – your gateway to powerful features and tools. Welcome to
            our platform – your gateway to powerful features and tools. Welcome
            to our platform – your gateway to powerful features and tools.
          </p>
        </section>

        {/* Features Heading */}
        <section className="features-section">
          <h2 className="features-heading">Features</h2>

          {/* Cards */}
          <div className="card-grid">
            <Link to="/about" className="card">
              About
            </Link>
            <a href="#" className="card">
              Products
            </a>
            <a href="#" className="card">
              Link1
            </a>
            <a href="#" className="card">
              Link2
            </a>
            <a href="#" className="card">
              Link1
            </a>
            <a href="#" className="card">
              Link2
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

/*import React, { useState } from "react";
import DataTable from "react-data-table-component";
import './Nav.css'

const userData = [
  { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "User" },
  { id: 3, name: "Sam Wilson", email: "samwilson@example.com", role: "Editor" },
  { id: 4, name: "Alice Brown", email: "alicebrown@example.com", role: "Moderator" },
];

const roles = ["All", "Admin", "User", "Editor", "Moderator"];

const DropdownPage = () => {
  const [selectedRole, setSelectedRole] = useState("All");
  const [nameInput, setNameInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Filter data based on selected role
  const filteredData = selectedRole === "All" ? userData : userData.filter((user) => user.role === selectedRole);

  // Handle name input change and show suggestions
  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setNameInput(inputValue);

    // Show suggestions if input is not empty
    if (inputValue) {
      const filteredSuggestions = userData
        .map((user) => user.name)
        .filter((name) => name.toLowerCase().includes(inputValue.toLowerCase()));

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle selecting a suggestion
  const handleSelectSuggestion = (name) => {
    setNameInput(name);
    setSuggestions([]);
  };

  return (
    <div className="dropdown-container">
      
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="dropdown"
      >
        {roles.map((role) => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>

      
      <div className="name-input-container">
        <input
          type="text"
          value={nameInput}
          onChange={handleNameChange}
          placeholder="Enter name..."
          className="name-input"
        />
      
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 
      <div className="table-container">
        <DataTable
          title="User Data"
          columns={[
            { name: "ID", selector: (row) => row.id, sortable: true, grow: 1 },
            { name: "Name", selector: (row) => row.name, sortable: true, grow: 2 },
            { name: "Email", selector: (row) => row.email, sortable: true, grow: 3 },
            { name: "Role", selector: (row) => row.role, sortable: true, grow: 2 },
          ]}
          data={filteredData}
          pagination
          responsive
        />
      </div>
    </div>
  );
};

export default DropdownPage;

*/
/*
import React, { useState } from "react";

const userData = [
  { name: "John Doe" },
  { name: "Jane Smith" },
  { name: "Alice Johnson" },
  { name: "Bob Brown" },
  { name: "Charlie Adams" },
  { name: "David Williams" },
];

const DropdownPage = () => {
  const [nameInput, setNameInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);

  // Handle input change and show suggestions
  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setNameInput(inputValue);

    if (inputValue) {
      const filteredSuggestions = userData
        .map((user) => user.name)
        .filter(
          (name) =>
            name.toLowerCase().includes(inputValue.toLowerCase()) &&
            !selectedNames.includes(name) // Avoid duplicates
        );

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle selecting a suggestion
  const handleSelectSuggestion = (name) => {
    setSelectedNames([...selectedNames, name]); // Add name to selected list
    setNameInput(""); // Reset input
    setSuggestions([]); // Hide suggestions
  };

  // Remove selected name
  const handleRemoveName = (nameToRemove) => {
    setSelectedNames(selectedNames.filter((name) => name !== nameToRemove));
  };

  return (
    <div className="container mt-4">
      <h4>Select Names</h4>

      {/* Multi-Select Input Field 
      <div className="multi-select-input">
        {selectedNames.map((name) => (
          <span key={name} className="tag">
            {name} <button onClick={() => handleRemoveName(name)}>✖</button>
          </span>
        ))}

        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={nameInput}
          onChange={handleNameChange}
        />
      </div>

      {/* Suggestion Box 
      {suggestions.length > 0 && (
        <ul className="suggestion-box">
          {suggestions.map((name, index) => (
            <li key={index} onClick={() => handleSelectSuggestion(name)}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownPage;
*/
/*import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./Nav.css";

const customStyles = {
  table: {
    style: {
      width: "100%",
      height: "100%",
      border: "1px solid #ddd",
      borderRadius: "8px",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      backgroundColor: "#f8f9fa",
      whiteSpace: "nowrap",
    },
  },
  cells: {
    style: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      padding: "8px",
    },
  },
};

const DropdownPage = () => {
  const [selectedRole, setSelectedRole] = useState("All");

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true,},
    { name: "Name", selector: (row) => row.name, sortable: true,},
    { name: "Email", selector: (row) => row.email, sortable: true, },
    { name: "Role", selector: (row) => row.role, sortable: true, },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "User" },
    { id: 3, name: "Sam Wilson", email: "samwilson@example.com", role: "Editor" },
    { id: 4, name: "Alice Brown", email: "alicebrown@example.com", role: "Moderator" },
  ];

  const roles = ["All", "Admin", "User", "Editor", "Moderator"];
  const filteredData = selectedRole === "All" ? data : data.filter((item) => item.role === selectedRole);

  return (
    <div className="dropdown-container">
      <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className="dropdown">
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <div className="table-container">
        <DataTable title="User Data" columns={columns} data={filteredData} pagination customStyles={customStyles} responsive />
      </div>
    </div>
  );
};

export default DropdownPage;
*/
