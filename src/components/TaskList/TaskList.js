import React from "react";
import "./tasklist.css";
export default function TaskList({title}) {
  return (
    <div className="tasklist">
      <div classname="title">{title}</div>
      <div className="content"></div>
    </div>
  );
}
