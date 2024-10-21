import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForms';
import TodoList from './components/TodoList';
import { fetchTodos, addTodo, editTodo, deleteTodo } from './services/productoServices'; 
const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);


  useEffect(() => {
    async function loadTodos() {
      const todosData = await fetchTodos();
      // Ordenar por estado 'A' primero y luego por ID
      const sortedTodos = todosData.sort((a, b) => {
        if (a.status === 'A' && b.status !== 'A') return -1;
        if (a.status !== 'A' && b.status === 'A') return 1;
        return b.id - a.id; // De mayor a menor
      });
      setTodos(sortedTodos);
    }
    loadTodos();
  }, []);

  const handleAddTodo = async (todo) => {
    try {
      const newTodo = await addTodo(todo);
      setTodos([newTodo,...todos]);
    } catch (error) {
      console.error('Error adding todo', error);
    }
  };

  const handleEditTodo = async (todo) => {
    try {
      const updateTodo = await editTodo(todo);
      setTodos(todos.map((todo) => 
        todo.id === updateTodo.id ? updateTodo : todo
      ));
      setCurrentTodo(null);
    } catch (error) {
      console.error('Error editing todo', error);
    }
  };

    const handleDeleteTodo = async (id) => {
      try {
        const updateTodo = await deleteTodo(id);
        setTodos(todos.map((todo) => 
          todo.id === updateTodo.id ? updateTodo : todo
        ));
      } catch (error) {
        console.error('Error deleting todo', error);
      }
    };

// Estilo para centrar el contenido
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '18px',
  justifyContent: 'center',
  minHeight: '100vh', // Ajustar a 100vh para centrar verticalmente en la ventana
  padding: '10px',
  backgroundColor: '#f0f0f0', // Fondo opcional
  textAlign: 'center', // Asegurar el centrado del texto
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px', // Establecer un ancho máximo para asegurar que estén alineados
};

return (
  <div style={appStyle}>
    <div style={containerStyle}>
      <TodoForm addTodo={handleAddTodo} editTodo={handleEditTodo} currentTodo={currentTodo} />
    </div>
    <div style={containerStyle}>
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} setCurrentTodo={setCurrentTodo} />
    </div>
  </div>
);
};

export default App;
