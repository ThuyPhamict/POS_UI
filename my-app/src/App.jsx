import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NumberKeyboardPage from "./NumberKeyboardPage";
import OrderViewPage from "./OrderViewPage";
import EnterCustomerNamePage from "./EnterCustomerNamePage";
import './App.css';

function App() {

  return (
      <div>
       <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/" component={NumberKeyboardPage} />
          <Route path="/order-view" component={OrderViewPage} />
          <Route path="/enter-customer-name" component={EnterCustomerNamePage} />
        </Switch>
      </Router>
      </div>
      
  )
}

export default App
