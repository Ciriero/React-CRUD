import React from "react";

const Todo = ({ item }) => {
  return (
    <div className="todo">
      <li className="todo-item">{item.term}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
    </div>
  );
};

export default Todo;