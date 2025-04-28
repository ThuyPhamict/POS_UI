import React, { useState, useEffect } from "react";
import {useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import './styles/namepage.css';

const EnterCustomerNamePage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const location = useLocation();

  const data = location.state;
  console.log(data);
  // const phone = location.state?.phone;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // useEffect(() => {
  //   if (!phone) {
  //     alert("Phone number is missing. Please try again.");
  //     navigate("/enter-customer-phone"); 
  //   }
  // }, [phone, navigate]);


  const handleSave = async () => {
    try {
      console.log(data.phone);
    const orderRes = await axios.post(`http://localhost:3000/api/newcustomers`, {
          name,
          phone: data.phone,
          totalAmount: 0         
        });

        const { order, customerId } = orderRes.data;

            navigate("/order-view", {
              state: {
                order,
                name,
                phone: data.phone,
                customerId
              }
            });
          } catch (error) {
            console.error("Error saving customer and order:", error);
            alert("Failed to save customer. Please try again.");
          }
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
      <button onClick={handleSave} disabled={!name.trim()} className="save-button" >
        Save
      </button>
    </div>
  );
};

export default EnterCustomerNamePage;
