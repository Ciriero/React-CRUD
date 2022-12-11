import React from "react";

const Todo = ({ item, result, setResult, edit1 }) => {
  const deleteTodo = (id) => {
    const deleteOne = result.filter((item) => item.id !== id);
    setResult(deleteOne);
  };
  const completeTodo = (id) => {
    const completeOne = result.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setResult(completeOne);
  };
  return (
    <div className="todo">
      <li className={`todo-item ${item.completed ? "completed" : ""}`}>
        {item.term}
      </li>
      <button onClick={() => completeTodo(item.id)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteTodo(item.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button onClick={() => edit1(item)} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
    </div>
  );
};

export default Todo;
