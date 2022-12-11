import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TodoList from "./TodoList";

const Form = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterd, setFilterd] = useState([]);

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

  useEffect(() => {
    filterHandler();
  }, [result, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterd(result.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterd(result.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterd(result);
        break;
    }
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
          <select
            onChange={(e) => setStatus(e.target.value)}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <>
        <TodoList result={result} setResult={setResult} filterd={filterd} />
      </>
    </>
  );
};

export default Form;
