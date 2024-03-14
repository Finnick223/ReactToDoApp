import TodoItem from './TodoItems';

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
  getTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, getTodo, deleteTodo }: TodoListProps) => {
  return (
    <div className="todos-container">
      {todos &&
        todos.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            getTodo={getTodo}
            deleteTodo={deleteTodo}
          />
        ))}
    </div>
  );
};

export default TodoList;
