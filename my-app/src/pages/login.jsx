import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.jpg';



function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] =useState("");
    const history = useHistory();

    const handleSubmit = () =>{
       // For simplicity, assume any username and password is valid
    if (username && password) {
        // Redirect to the Home page after successful login
        history.push("/home");
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
                
                    <button type="submit" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    );
    
}

export default login