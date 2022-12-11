import React from "react";
import Todo from "./Todo";

const TodoList = ({
  result,
  setResult,
  filterd,
  edit1,
  setModalStatus,
  setContentModal,
  modalStatus,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterd.map((item) => (
          <Todo
            item={item}
            key={item.id}
            result={result}
            setResult={setResult}
            edit1={edit1}
            setModalStatus={setModalStatus}
            setContentModal={setContentModal}
            modalStatus={modalStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
