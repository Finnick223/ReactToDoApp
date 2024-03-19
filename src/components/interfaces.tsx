export interface Todo {
  id: number;
  title: string;
  checked?: boolean;
}

export interface InputProps {
  todo: Todo | null;
  addTodo: (title: string) => void;
  updateTodo: (id: number, title: string) => void;
  inputs: { title: string };
  setInputs: React.Dispatch<React.SetStateAction<{ title: string }>>;
}

export interface TodoItemProps {
  todo: Todo;
  getTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  onToggle: (id: number) => void;
}

export interface TodoListProps {
  todos: Todo[];
  getTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  onToggle: (id: number) => void;
}

export interface FilterProps {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
