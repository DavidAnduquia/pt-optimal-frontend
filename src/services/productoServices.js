import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pt-optimal-backend.onrender.com/producto',  // Cambia esto a tu URL base
  });

export const fetchTodos = async () => {
  try {
    const response = await api.get('/getProductos');
    return response.data.data;
  } catch (error) {
    console.error('Error consultando todos', error);
    throw error;
  }
};

export const addTodo = async (todo) => {
  try {
    const response = await api.post('/addProducto', todo);
    return response.data.data.producto;
  } catch (error) {
    console.error('Error Agregando todo', error);
    throw error;
  }
};

export const editTodo = async (todo) => {
  try {
    const response = await api.put('/updateProducto', todo);
    return response.data.data.producto;
  } catch (error) {
    console.error('Error editando todo', error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/deleteProducto/${id}`);
    return response.data.data.producto;
  } catch (error) {
    console.error('Error eliminitando todo', error);
    throw error;
  }
};
