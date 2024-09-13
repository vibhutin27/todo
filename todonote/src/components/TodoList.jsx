import React from 'react';

function TodoList({ todos, completeTodo, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div
          className={`todo ${todo.isCompleted ? 'completed' : ''}`}
          key={index}
        >
          <span
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : '',
            }}
            onClick={() => completeTodo(index)}
          >
            {todo.text}
          </span>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
