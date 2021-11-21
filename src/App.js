import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleCompleted,
} from "./redux/todo/todo-actions";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todoInput = useRef();
  const todos = useSelector((state) => state?.todos);

  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      title: todo,
      id: uuidv4(),
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTodo("");
    todoInput.current.value = "";
  };

  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="container">
        <div className="Todo__cta">
          <input
            onChange={(e) => setTodo(e.target.value)}
            className="Todo__input"
            type="text"
            ref={todoInput}
            placeholder="Add todo"
          />
          <button
            disabled={todo ? false : true}
            className="Todo__add-btn"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <div>
          {todos?.map((todo) => (
            <div className="Todo__wrapper">
              <div className="Todo__text">
                <input
                  type="checkbox"
                  onChange={() => dispatch(toggleCompleted(todo?.id))}
                  checked={todo.completed}
                />
                <span>{todo.title}</span>
              </div>
              <button onClick={() => dispatch(deleteTodo(todo?.id))}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
