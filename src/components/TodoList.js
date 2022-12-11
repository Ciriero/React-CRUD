import React from "react";
import Todo from "./Todo";

const TodoList = ({ result, setResult }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {result.map((item) => (
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
