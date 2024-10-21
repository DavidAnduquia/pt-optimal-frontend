import React, { useState, useEffect } from 'react';
 
const TodoForm = ({ addTodo, editTodo, currentTodo }) => {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (currentTodo) {
      setName(currentTodo.name);
    }
  }, [currentTodo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentTodo) {
      editTodo({ ...currentTodo, name });
    } else {
      await addTodo({ name });
    }
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="  Agrega un nuevo producto"
        required
        style={{ ...styles.input, ...(isFocused ? styles.inputFocus : {}) }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button type="submit" style={styles.button}>
        {currentTodo ? 'Editar' : 'Agregar'}
      </button>
    </form>
  );
};
 
// Estilos
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'row', // Cambiar a columna para centrar verticalmente
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '15px',
    width: '410px', // Asegurar que ocupe el ancho completo
  },
  input: {
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    marginLeft: '20px',
    width: '490px',
    outline: 'none',
    transition: 'border 0.3s, box-shadow 0.3s',
    marginRight: '2px', // Espacio entre el input y el botón
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    width: '120px',
    padding: '11px',
    marginLeft: '20px', 
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
}

export default TodoForm;
