import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="conteiner">
        <TaskList title={"Livre"}/>
        <TaskList title={"Ocupado"}/>
      </div>
    </div>
  );
}


