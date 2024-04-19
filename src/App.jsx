// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine.jsx";
import Sardines from "./Sardines.jsx";
import Chips from "./Chips.jsx";
import Soda from "./Soda.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/sardines" element={<Sardines />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
