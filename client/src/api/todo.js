import axios from './index';

export const addTodoAPI = (todo) => axios.post('/todos', todo);

export const updateTodoAPI = (id, todo) => axios.patch(`/todos/${id}`, todo);

export const deleteTodoAPI = (id) => axios.delete(`/todos/${id}`);
