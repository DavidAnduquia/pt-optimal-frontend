import React from 'react';
 
const TodoItem = ({ todo, deleteTodo, setCurrentTodo }) => {
  const handleMouseEnter = (e) => {
    if (todo.status === 'A') {
      if (e.target.textContent === 'Editar') {
        e.target.style.backgroundColor = '#0056b3';
      } else if (e.target.textContent === 'Eliminar') {
        e.target.style.backgroundColor = '#c82333';
      }
    }
  };

  const handleMouseLeave = (e) => {
    if (todo.status === 'A') {
      if (e.target.textContent === 'Editar') {
        e.target.style.backgroundColor = '#007bff';
      } else if (e.target.textContent === 'Eliminar') {
        e.target.style.backgroundColor = '#dc3545';
      }
    }
  };

  return (
    <li style={styles.item}>
      <div style={{ flex: 1, textAlign: 'left' }}>
        <p><strong>ID:</strong> {todo.id} - <strong>Nombre: </strong> {todo.name}</p>
        <p style={{ fontSize: '12px' }}>Creado el: {todo.date_created}</p>
        <p style={{ fontSize: '12px' }}>Modificado el: {todo.date_modified}</p>
        <p style={{ fontSize: '12px' }}>Status: {todo.status === 'A' ? 'Activo' : todo.status === 'I' ? 'Inactivo' : 'Desconocido'}</p>
      </div>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setCurrentTodo(todo)}
        >
          Editar
        </button>
        <button
          style={todo.status === 'A' ? { ...styles.button, ...styles.buttonDelete } : { ...styles.button, ...styles.buttonDelete, ...styles.buttonDisabled }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => deleteTodo(todo.id)}
          disabled={todo.status !== 'A'}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

// Estilos fuera del componente
const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '380px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column', // Cambiar a columna
    alignItems: 'center', // Centrar los botones horizontalmente
    gap: '10px', // Espacio entre botones
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 12px', // Aumentar el padding para hacer los botones del mismo tamaño
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100px', // Asignar un ancho fijo para igualar los botones
  },
  buttonDelete: {
    backgroundColor: '#dc3545',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
};

export default TodoItem;
