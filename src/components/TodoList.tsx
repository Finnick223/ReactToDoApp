import { useState } from 'react';
import TodoItem from './TodoItems';
import { TodoListProps, Todo } from './interfaces';
import Filter from './Filter';

const TodoList = ({ todos, getTodo, deleteTodo, onToggle }: TodoListProps) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setFilter(e.target.value as 'all' | 'pending' | 'checked');
  };

  const filteredTodos = () => {
    if (!todos) throw new Error('you didnt added any todos');
    if (filter === 'all') {
      return todos;
    } else if (filter === 'pending') {
      return todos.filter((todo) => !todo.checked);
    } else if (filter === 'checked') {
      return todos.filter((todo) => todo.checked);
    }
  };

  return (
    <>
      <div className="todos-container">
        {todos &&
          filteredTodos().map((todo: Todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              getTodo={getTodo}
              deleteTodo={deleteTodo}
              onToggle={onToggle}
            />
          ))}
      </div>
      <Filter handleFilterChange={handleFilterChange} />
    </>
  );
};

export default TodoList;
