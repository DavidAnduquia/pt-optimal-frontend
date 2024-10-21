import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, setCurrentTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          setCurrentTodo={setCurrentTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
