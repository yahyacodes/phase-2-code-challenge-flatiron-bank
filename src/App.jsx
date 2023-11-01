import React, { useEffect, useState } from "react";
import FlatironBank from "./Components/flatironBank";
import "./App.css";
import AddTransaction from "./Components/addTransaction";

function App() {
  return (
    <div className="container shadow-lg rounded-lg p-4">
      <AddTransaction />
      <FlatironBank />
    </div>
  );
}

export default App;
