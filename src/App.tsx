import { useState, useEffect } from 'react';
import Header from './components/Header';
import Input from '../src/components/Input'
import List from '../src/components/List'
import Button from '../src/components/Button'
import './index.css';
import TodoList from './components/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  // const editTodo = (id, title) => {
  //   if(!title) {
  //     toast.error('Please fill all the required input fields');
  //     return
  //   }
  //   fetch(`/api/todo/${id}`, {
  //     method: 'PATCH',
  //     body: JSON.stringify({
  //       title: title,
  //     }),
  //   })
  //     .then((res) => {
  //       getTodos();
  //       // setToggle(false);
  //       toast.success('Todo zostalo zmienione.');
  //     })
  //     .catch((error) => {
  //       console.log('Note not found', error);
  //       toast.error('error przy zmianie.');
  //     });
  // }
  const deleteTodo = (id) => {
    fetch(`/api/todo/${id}`, { method: 'DELETE' })
      .then((res) => {
        getTodos();
        toast.success('todo usuniete');
      })
      .catch((error) => {
        console.log('todo not found', error);
        toast.error('Error deleting note.');
      });
  }
    return (
    <>
      <Header />
      <div className='newTodo'>
        <section>
          <Input />
          <Button />
        </section>
      <TodoList
        todos={todos}
        getTodo={getTodos}
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
