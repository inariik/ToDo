import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="list-group-item">
      {todo.text}
      <button 
        className="btn btn-danger float-right"
        onClick={() => onDelete(todo.id)}
      >
        Удалить
      </button>
    </li>
  );
};

export default TodoItem;
