import React from 'react';

const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
  return (
    <li className="todo-item">
      <div className="todo-item-container">
        <input
          className="todo-item-checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheckCompleted(todo.id)}
        />
        {todo.title}
      </div>

      <button
        onClick={() => handleDelete(todo.id)}
        type="button"
        className="btn-close"
        aria-label="Close"
      >
        X
      </button>
    </li>
  );
};
export default ToDo;
