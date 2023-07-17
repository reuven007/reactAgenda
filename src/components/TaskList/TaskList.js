
import React , {useState}from "react";
import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({title}) {
  const [count, setCount] = useState(20);
  const increment = () => {
    setCount((currentCount) =>{
      return currentCount + 1;

    });

  };

  return (
    <div className="tasklist">
      <div classname="title">{title}</div>
      <div className="content">
        {count}
      <button onClick={increment}> adicionar</button>
      </div>
    </div>
  );
}

TaskList.prototypes = {
  title: PropTypes.string
};