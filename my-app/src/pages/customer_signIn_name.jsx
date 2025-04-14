import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './styles/namepage.css';

const EnterCustomerNamePage = () => {
  const [name, setName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    // Simulate saving the customer's name with the phone
    const customerInfo = { name, phone };
    console.log("Customer Info Saved:", customerInfo);

    // Redirect to the Order View page
    navigate("/order-view", customerInfo);
  };

  return (
    <div className="namepage">
      <h2>Enter Customer Name</h2>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter Name"
      />
      <button onClick={handleSave} disabled={!name}>
        Save
      </button>
    </div>
  );
};

export default EnterCustomerNamePage;
