import TodoItem from './TodoItems';
import { TodoListProps, Todo } from './interfaces';


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
