import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";
import BusinessScreen from "./BusinessScreen";
import CommunityScreen from "./CommunityScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/business" element={<BusinessScreen />} />
        <Route path="/community" element={<CommunityScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
