export type UseTaskItemsReturn = {
  taskItems: string[];
  addTask: (task: string) => void;
  completeTask: (itemIndex: number) => void;
  editTask: (taskIndex: number, task: string) => void;
};

export type TaskContextValue = Pick<
  UseTaskItemsReturn,
  'taskItems' | 'addTask' | 'completeTask' | 'editTask'
>;

export type TaskContextProviderProps = {
  children: React.ReactElement;
};
