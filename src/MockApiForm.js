import React, { useState } from "react";
import axios from "axios";
const MockApiForm = () => {
  const [formData, setFormData] = useState({
    textbox: "",
    dropdown: "",
    checkbox: false,
    radio: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock API post request
    await axios.post("http://localhost:3001/users", formData);

  };



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text Box:
        <input
          type="text"
          name="textbox"
          value={formData.textbox}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Dropdown List:
        <select name="dropdown" value={formData.dropdown} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <br />

      <label>
        Checkbox:
        <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Radio Buttons:
        <br />
        <input
          type="radio"
          name="radio"
          value="radio1"
          checked={formData.radio === "radio1"}
          onChange={handleChange}
        />
        Radio 1
        <br />
        <input
          type="radio"
          name="radio"
          value="radio2"
          checked={formData.radio === "radio2"}
          onChange={handleChange}
        />
        Radio 2
        <br />
        <input
          type="radio"
          name="radio"
          value="radio3"
          checked={formData.radio === "radio3"}
          onChange={handleChange}
        />
        Radio 3
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MockApiForm;
