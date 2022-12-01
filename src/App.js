import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './Utils/Login';
import './App.css'
import Spinner from './Utils/Spinner';


const App = () => {
  return (
    <div className="flex justify-center bg-cust-green h-screen">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Spinner" element={<Spinner />} />
      
    </Routes>
  </div>
  )
}

export default App