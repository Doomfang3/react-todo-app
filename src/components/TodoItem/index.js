import React from "react";
import "./index.css";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <label>
        <input
          type="checkbox"
          data-id={props.item.id}
          checked={props.item.completed}
          onChange={props.handleChange}
        />
        <span className={props.item.completed ? "completed" : null}>
          {props.item.text}
        </span>
      </label>
    </div>
  );
}

export default TodoItem;
