//Todo edytowania nie da sie przerwac ani opuscic

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Input from '../src/components/Input';
import './index.css';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [inputs, setInputs] = useState({ title: ''});

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    fetch('/api/todo')
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch((error) => console.log('Error fetching todos', error));
  };

  const getTodo = (id: any) => {
    fetch(`/api/todo/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data.todos);
        // setToggle(true);
      })
      .catch((error) => console.log('brak todo', error));
  };

  const addTodo = (title: any) => {
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
        // setToggle(false);
        setInputs({ title: '' });
        toast.success('todo dodane');
      })
      .catch((error) => {
        console.log('error przy dodawaniu.', error);
        toast.error('error przy dodawaniu.');
      });
  };
  
  const updateTodo = (id: any, title: any) => {
    if(!title) {
      toast.error('Please fill all the required input fields');
      return
    }
    fetch(`/api/todo/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: title,
      }),
    })
      .then((res) => {
        getTodos();
        // setToggle(false);
        toast.success('Todo zostalo zmienione.');
      })
      .catch((error) => {
        console.log('Note not found', error);
        toast.error('error przy zmianie.');
      });
  }

  const deleteTodo = (id: any) => {
    fetch(`/api/todo/${id}`, { method: 'DELETE' })
      .then((res) => {
        getTodos();
        toast.success('todo usuniete');
      })
      .catch((error) => {
        console.log('todo not found', error);
        toast.error('Error deleting note.');
      });
  };
  

  // const handleAdd = () => {
  //   setInputs({ title: '', body: '' });
  //   setNote([]);
  //   setToggle(true);
  // };

  return (
    <>
      <Header />
      <div className="newTodo">
        <Input 
        todo={todo} 
        addTodo={addTodo} 
        updateTodo={updateTodo} 
        inputs={inputs} 
        setInputs={setInputs} />
        <TodoList
          todos={todos}
          getTodo={getTodo}
          // setToggle={setToggle}
          deleteTodo={deleteTodo}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </>
  );
}

export default App;
