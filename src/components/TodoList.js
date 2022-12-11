import React from "react";
import Todo from "./Todo";

const TodoList = ({ result, setResult, filterd, edit1 }) => {
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
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
