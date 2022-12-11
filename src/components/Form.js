import { nanoid } from "nanoid";
import React, { useState } from "react";
import Swal from "sweetalert2";
import TodoList from "./TodoList";

const Form = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!term.trim()) {
      Swal.fire("Write something, please");
      return;
    }
    setResult([
      ...result,
      {
        id: nanoid(),
        completed: false,
        term,
      },
    ]);
    setTerm("");
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          className="todo-input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <>
        <TodoList result={result} setResult={setResult} />
      </>
    </>
  );
};

export default Form;
