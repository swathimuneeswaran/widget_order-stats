import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WidgetOrderStats from "./components/WidgetOrderStats";
import { stats } from "./data/data.json";
import OrderStat from "./components/OrderStat";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WidgetOrderStats stats={stats} />} />

          <Route path="/item/:id" element={<OrderStat stats={stats} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
