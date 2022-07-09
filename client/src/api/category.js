import axios from './index';

// implement
export const addCategoryAPI = (todo) => axios.post('/todos', todo);
