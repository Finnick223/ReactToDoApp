import TodoItem from './TodoItems';

interface TodoList {
    todos: any,
    getTodo: any,
    setToggle: any,
    deleteTodo: any
}
const TodoList = ({ todos, getTodo, setToggle, deleteTodo }: TodoList) => {
  return (
    <div className="todos-container">
      {todos &&
        todos.map((todo: any) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            getTodo={getTodo}
            setToggle={setToggle}
            deleteTodo={deleteTodo}
          />
        ))}
    </div>
  );
};
export default TodoList;