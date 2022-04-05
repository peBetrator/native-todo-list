export type Task = { name: string; finished: boolean };

export type UseTaskItemsReturn = {
  taskItems: Task[];
  addTask: (task: string) => void;
  completeTask: (itemIndex: number) => void;
  editTask: (taskIndex: number, task: Task) => void;
};

export type TaskContextValue = Pick<
  UseTaskItemsReturn,
  'taskItems' | 'addTask' | 'completeTask' | 'editTask'
>;

export type TaskContextProviderProps = {
  children: React.ReactElement;
};
