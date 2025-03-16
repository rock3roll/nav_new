import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


const FormPage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((opt) => opt !== value)
    );
  };

  return (
    <div className="main-content">
    <div className="centered">
    <div className="form-container">
      <h2>Select Options</h2>
      <div className="checkbox-group">
        {["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"].map(
          (option, index) => (
            <div key={index} className="form-check">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                value={option}
                className="form-check-input"
                onChange={handleCheckboxChange}
              />
              <label htmlFor={`checkbox-${index}`} className="form-check-label">
                {option}
              </label>
            </div>
          )
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </div>
    </div>
    </div>
  );
};

export default FormPage;
