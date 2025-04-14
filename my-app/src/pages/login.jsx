import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/logo.jpg';
import './styles/loginpage.css';


function login() {
    const [username, setUsername] = useState("Admin");
    const [password, setPassword] =useState("123");
    const navigate = useNavigate();

    const handleSubmit = () =>{
       // For simplicity, assume any username and password is valid
    if (username && password) {
        console.log("login successfully!!");
        // Redirect to the Home page after successful login
        navigate("/home");
        } else {
            alert("Please enter both username and password");
        }
    };

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="imgcontainer">
                    <img 
                    src= {logo}
                    alt="Avatar"
                    />
                </div>
            
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input 
                    type="text" 
                    placeholder="Enter Username" 
                    name="uname" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                
                    <label htmlFor="psw"><b>Password</b></label>
                    <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </div>
    );
    
}

export default login