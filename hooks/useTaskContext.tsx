import { createContext, useContext } from 'react';

import { TaskContextValue, TaskContextProviderProps } from './types';
import useTaskItems from './useTaskItems';

const TaskContext = createContext({} as TaskContextValue);

export const useTasks = () => useContext(TaskContext);

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const { taskItems, addTask, completeTask, editTask } = useTaskItems();

  return (
    <TaskContext.Provider
      value={{ taskItems, addTask, completeTask, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
