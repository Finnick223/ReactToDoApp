import { useEffect, ChangeEvent, FormEvent, useState } from 'react';
import { InputProps } from './interfaces';

const Input = ({ todo, addTodo, updateTodo }: InputProps) => {
  const [inputs, setInputs] = useState({ title: '' });

  useEffect(() => {
    if (todo) {
      setInputs({ title: todo.title });
    }
  }, [todo]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title } = inputs;
    if (!todo?.id) {
      addTodo(title);
      setInputs({ title: '' });
    } else {
      updateTodo(todo.id, title);
      todo.id = null;
      setInputs({ title: '' });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputs((prevInputs) => ({
      ...prevInputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputs.title}
        onChange={handleChange}
        placeholder="Title"
        name="title"
      />
      <button type="submit" className="btn">
        {todo?.id ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default Input;
