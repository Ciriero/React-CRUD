import React from "react";

const Todo = ({ item, result, setResult, edit1, setModalStatus, setContentModal, modalStatus }) => {
  const deleteTodo = (id) => {
    const deleteOne = result.filter((item) => item.id !== id);
    setResult(deleteOne);
    setContentModal("Todo Deleted");
    setModalStatus(true);
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
    setModalStatus(true);
    setContentModal("Todo Completed");
  };
  return (
    <div className="todo">
      <li className={`todo-item ${item.completed ? "completed" : ""}`}>
        {item.term}
      </li>
      <button disabled={modalStatus} onClick={() => completeTodo(item.id)} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button disabled={modalStatus} onClick={() => deleteTodo(item.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button disabled={modalStatus} onClick={() => edit1(item)} className="edit-btn">
        <i className="fas fa-edit"></i>
      </button>
    </div>
  );
};

export default Todo;
