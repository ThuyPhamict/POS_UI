import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './styles/homepage.css'; 
import './images/logo'

const HomePage = () => {
  const [orderData, setOrderData] = useState({
    orderId: 100, // Default Order ID
    customerName: 'Unknown', // Default customer name
    staff: '', // Empty staff field
    service: '' // Empty service field
  });

  const history = useHistory();

  // Function to fetch order data from the backend
  const fetchOrderData = async () => {
    try {
      const response = await axios.get('/api/order'); // Replace with your API endpoint
      const data = response.data;

      // Update state with data, using defaults for missing fields
      setOrderData({
        orderId: data.orderId || 100, // Default to 100 if no orderId
        customerName: data.customerName || 'Unknown', // Default to 'Unknown' if no customerName
        staff: data.staff || '', // Empty if no staff
        service: data.service || '' // Empty if no service
      });
    } catch (error) {
      console.error('Error fetching order data:', error);
      // In case of an error, we retain the default values
    }
  };

  // UseEffect to fetch the order data when the component mounts
  useEffect(() => {
    fetchOrderData();
  }, []);

  // Function to create a new order and increase the Order ID
  const createNewOrder = () => {
    setOrderData((prevData) => ({
      ...prevData,
      orderId: prevData.orderId + 1 // Increment the order ID by 1
    }));
    useHistory('/customer_signIn_phone');
  };

  return(
    <div className="homepage">
   
      <header className="homepage-header">
        <div className="logo">
        <img 
            src= {logo}
            alt="Avatar"
            />
        </div>
      </header>

     
      <nav className="menu">
        <ul className="menu-list">
          <li><a href="/home">Home</a></li>
          <li><a href="/orderHistory">Order History</a></li>
          <li><a href="/voidedOrder">Voided Order</a></li>
        </ul>
      </nav>

     
        <div className="order-details">
          <p>Order ID: {orderData.orderId}</p>
          <p>Customer: {orderData.customerName}</p>
          <p>Staff: {orderData.staff || 'Not Assigned'}</p>
          <p>Service: {orderData.service || 'No Service Selected'}</p>
          <button className="view-cart-button">View Cart</button>
        </div>


      <div className="new-order-section">
        <button className="create-order-button" onClick={createNewOrder}>
          Create New Order
        </button>
      </div>
    </div>

  );

}

export default HomePage;
