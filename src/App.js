import React, {useState} from "react";
import Weather from "./Weather";
import "./index.css"
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Login from "./Login";

import Home from "./Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { AuthContextProvider  } from "./context/AuthContext";

function App() {
  

  
  return (

    <AuthContextProvider >
      <Router>
        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
     
     
      
    </Router>
    </AuthContextProvider>
  );
}

export default App;
