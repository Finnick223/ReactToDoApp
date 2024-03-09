import { useState, useEffect } from 'react';
import Input from '../src/components/Input'
import List from '../src/components/List'
import Button from '../src/components/Button'
import './index.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    fetch('/api/todo')
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch((error) => console.log('Error fetching todos', error));
  };
    return (
    <>
      <header>
        <h1>ToDoApp</h1>
        <h2>training stuff</h2>
      </header>
      <div className='newTodo'>
        <section>
          <Input />
          <Button />
        </section>
      <TodoList
        todos={todos}
        getTodo={getTodos}
        // setToggle={setToggle}
        // deleteTodo={deleteTodo}
      />
      </div>
    </>
  );
}

export default App;
