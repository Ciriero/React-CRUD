import React from "react";
import Todo from "./Todo";

const TodoList = ({ result, setResult, filterd }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterd.map((item) => (
          <Todo
            item={item}
            key={item.id}
            result={result}
            setResult={setResult}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
