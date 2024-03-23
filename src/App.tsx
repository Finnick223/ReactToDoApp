import { useState, useEffect } from 'react';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Input from '../src/components/Input';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import { Todo } from './components/interfaces';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState({ id: 0, title: '' });
  const [inputs, setInputs] = useState({ title: '' });
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    getTodos();
  }, []);

  const handleToggle = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };
  

  const getTodos = () => {
    fetch('/api/todo')
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch((error) => console.log('Error fetching todos', error));
  };

  const getTodo = (id: number) => {
    fetch(`/api/todo/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data.todos);
      })
      .catch((error) => console.log('brak todo', error));
  };

  const addTodo = (title: string) => {
    if (!title) {
      toast.error('uzupelnij input');
      return;
    }
    fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
      }),
    })
      .then((res) => {
        console.log(res.json());
        getTodos();
        setInputs({ title: '' });
        toast.success('todo dodane');
      })
      .catch((error) => {
        console.log('error przy dodawaniu.', error);
        toast.error('error przy dodawaniu.');
      });
  };

  const updateTodo = (id: number, title: string) => {
    if (!title) {
      toast.error('Please fill all the required input fields');
      return;
    }
    fetch(`/api/todo/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: title,
      }),
    })
      .then(() => {
        getTodos();
        toast.success('Todo zostalo zmienione.');
      })
      .catch((error) => {
        console.log('Note not found', error);
        toast.error('error przy zmianie.');
      });
  };

  const deleteTodo = (id: number | null) => {
    fetch(`/api/todo/${id}`, { method: 'DELETE' })
      .then(() => {
        getTodos();
        toast.success('todo usuniete');
      })
      .catch((error) => {
        console.log('todo not found', error);
        toast.error('Error deleting note.');
      });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Header />
      <div className={isDarkMode ? 'TodoContainer_dark-mode' : 'TodoContainer'}>
        <Input
          todo={todo}
          addTodo={addTodo}
          updateTodo={updateTodo}
          inputs={inputs}
          setInputs={setInputs}
          />
        <TodoList 
        todos={todos} 
        getTodo={getTodo} 
        deleteTodo={deleteTodo} 
        onToggle={handleToggle}
        />
        <Counter todos={todos}/>
      <button className="toggle-dark-button" onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        />
    </>
  );
}

export default App;
