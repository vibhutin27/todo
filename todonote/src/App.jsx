import { useState } from 'react'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  // Add new todo
  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  // Mark todo as completed
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  // Remove todo from the list
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo App for Day Task</h1>
      <Todo addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App
