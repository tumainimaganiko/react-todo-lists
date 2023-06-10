import { useContext } from 'react';
import { TodosContext } from '@/context/TodosContext';

export const useTodosContext = () => useContext(TodosContext);
