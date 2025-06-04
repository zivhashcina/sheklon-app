
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import BusinessesScreen from "./BusinessesScreen";
import CommunityScreen from "./CommunityScreen";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/businesses" element={<BusinessesScreen />} />
        <Route path="/community" element={<CommunityScreen />} />
      </Routes>
    </Router>
  );
}
