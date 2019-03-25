import React from "react";
import "./index.css";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        data-id={props.item.id}
        checked={props.item.completed}
        onChange={props.handleChange}
      />
      <p className={props.item.completed ? "completed" : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
