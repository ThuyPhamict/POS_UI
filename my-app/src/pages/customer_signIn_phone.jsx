import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './styles/phonepage.css';

const NumberKeyboardPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  // Handle the number input on button click
  const handleNumberClick = (number) => {
    if (phoneNumber.length < 10) {
      setPhoneNumber((prevPhone) => prevPhone + number);
    }
  };

  // Handle Skip button click
  const handleSkip = () => {
    const unknownName = "Unknown";
    const unknownPhone = "unknown";

    // Simulate creating a new order with unknown name and phone
    const newOrder = { name: unknownName, phone: unknownPhone };
    console.log("New Order Created:", newOrder);

    // Redirect to Order View page
    history.push("/order-view");
  };

  // Handle Ok button click (only if 10 digits entered)
  const handleOk = () => {
    if (phoneNumber.length === 10) {
      // Redirect to the page to enter customer's name
      history.push("/customer_signIn_name", { phone: phoneNumber });
    }
  };

  // Update the validity of the Ok button based on phone number length
  const checkPhoneValidity = () => {
    setIsValid(phoneNumber.length === 10);
  };

  React.useEffect(() => {
    checkPhoneValidity();
  }, [phoneNumber]);

  return (
    <div>
      <h2>Enter Phone Number</h2>
      <div>
        <div className="number-keyboard">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="number-button"
            >
              {num}
            </button>
          ))}
          <button onClick={() => handleNumberClick(0)} className="number-button">
            0
          </button>
        </div>
      </div>
      <div>
        <p>Phone Number: {phoneNumber}</p>
      </div>
      <div>
        <button onClick={handleSkip} className="skip-button">
          Skip
        </button>
        <button
          onClick={handleOk}
          className="ok-button"
          disabled={!isValid}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default NumberKeyboardPage;
