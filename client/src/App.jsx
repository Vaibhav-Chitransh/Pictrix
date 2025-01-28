import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-4 py-4 sm:px-8 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-slate-50 to-slate-300">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate-image" element={<Generate />} />
        <Route path="/buy" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default App;
