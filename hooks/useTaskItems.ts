import { useState } from 'react';

import { Task, UseTaskItemsReturn } from './types';

export default function useTaskItems(): UseTaskItemsReturn {
  const [taskItems, setTaskItems] = useState([
    {
      name: '1',
      finished: false,
    },
    {
      name: '2',
      finished: false,
    },
    {
      name: '3',
      finished: false,
    },
  ] as Task[]);

  const addTask = (task: string) => {
    setTaskItems(prevTasks => [...prevTasks, { name: task, finished: false }]);
  };

  const completeTask = (itemIndex: number) => {
    setTaskItems(taskItems.filter((_, index) => index !== itemIndex));
  };

  const editTask = (taskIndex: number, task: Task) => {
    setTaskItems(prevTasks =>
      prevTasks.map((prevTask, index) =>
        index === taskIndex ? task : prevTask
      )
    );
  };

  return { taskItems, addTask, completeTask, editTask };
}
