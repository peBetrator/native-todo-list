export type TaskPropTypes = {
  id: number;
  text: string;
  finished: boolean;
  confirmDelete: () => void;
};
