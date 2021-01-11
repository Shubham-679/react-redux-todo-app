import React from "react";
import Todo from "./toDo";

const TodoList = ({ todos, toggleTodo }) => {
      
  return (
    <div className="container col-6">
    <ul className="list-group">
      {todos.map((todo) => (
          <li
          className="list-group-item"
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >

          {todo.text}
        </li>
       
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
