import { TTodos, TUser } from "../utils/type";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async (): Promise<TUser[]> => {
  try {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: TUser[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching users: ', error);
    throw error;
  }
};

export const getTodos = async (): Promise<TTodos[]> => {
  try {
    const res = await fetch(`${API_URL}/todos`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data: TTodos[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching todos: ', error);
    throw error;
  }
};
