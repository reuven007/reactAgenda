import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ul>
        <li>Aprender Quark</li>
        <li>Estudar 8h dia</li>
      </ul>
    </div>
  );
}
