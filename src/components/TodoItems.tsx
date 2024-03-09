import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

interface TodoItem {
    todo: any,
    getTodo: any,
    setToggle: any,
    deleteTodo: any,
};
const TodoItem = ({ todo, getTodo, setToggle, deleteTodo }: TodoItem) => {
    return (
      <div className="todos-item" onClick={() => getTodo(todo.id)}>
        <h2 className="todos-item__title">{todo.title}</h2>
        <section>
          <button className="toolbox__btn" onClick={() => getTodo(todo.id)}>
            <FaRegEdit color="black" size={18} />
          </button>
          <button className="toolbox__btn" onClick={() => deleteTodo(todo.id)}>
            <FaRegTrashAlt color="black" size={18} />
          </button>
        </section>
      </div>
    );
  };
  export default TodoItem;