// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import CommunityScreen from "./screens/CommunityScreen";
import BusinessScreen from "./screens/BusinessScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/community" element={<CommunityScreen />} />
        <Route path="/business" element={<BusinessScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
