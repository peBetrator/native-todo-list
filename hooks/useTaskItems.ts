import { useState } from 'react';

import { UseTaskItemsReturn } from './types';

export default function useTaskItems(): UseTaskItemsReturn {
  const [taskItems, setTaskItems] = useState(['1', '2', '3'] as string[]);

  const addTask = (task: string) => {
    setTaskItems(prevTasks => [...prevTasks, task]);
  };

  const completeTask = (itemIndex: number) => {
    setTaskItems(taskItems.filter((_, index) => index !== itemIndex));
  };

  const editTask = (taskIndex: number, task: string) => {
    setTaskItems(prevTasks =>
      prevTasks.map((prevTask, index) =>
        index === taskIndex ? task : prevTask
      )
    );
  };

  return { taskItems, addTask, completeTask, editTask };
}
