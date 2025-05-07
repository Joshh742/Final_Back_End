import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/loginScreens";
import HomeScreen from "./screens/homeScreens";
import StockScreen from "./screens/stockScreens";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/stock" element={<HomeScreen />} />
        <Route path="/stock-barang" element={<StockScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
