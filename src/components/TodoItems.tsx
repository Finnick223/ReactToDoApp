import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { TodoItemProps } from './interfaces';
import * as Icon from 'react-icons/fi';
// @ts-ignore
import Checkbox from 'react-custom-checkbox';

const TodoItem = ({ todo, getTodo, deleteTodo, onToggle }: TodoItemProps) => {

  const handleCheckboxChange = () => {
    onToggle(todo.id);
  };

  return (
    <div className="todo-item">
      <Checkbox
        checked={todo.checked}
        onChange={handleCheckboxChange} 
        icon={
          <div
            style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#646cff',
              alignSelf: 'stretch',
            }}
          >
            <Icon.FiCheck color="white" size={28} />
          </div>
        }
        borderColor="#174A41"
        borderRadius={20}
        style={{ overflow: 'hidden', marginRight: '10vw' }}
        size={30}
      />
      <h2 className="todo-item__title">{todo.title}</h2>
      <section>
        <button className="toolbox__btn" onClick={() => getTodo(todo.id)}>
          <FaRegEdit color="black" size={20} />
        </button>
        <button className="toolbox__btn" onClick={() => deleteTodo(todo.id)}>
          <FaRegTrashAlt color="black" size={20} />
        </button>
      </section>
    </div>
  );
};

export default TodoItem;
