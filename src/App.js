import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import NotFound from './components/NotFound';
import Eventa from './components/Blog';
import AddEvent from './components/AddEvent';
import Help from './components/Help'
const App=()=>{
    return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="addevent" element={<AddEvent />} />
          <Route path="help" element={<Help />} /> 
          <Route path="addevent/:id" element={<Eventa />} />   
          <Route path="*" element={<NotFound />} />      
      </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;