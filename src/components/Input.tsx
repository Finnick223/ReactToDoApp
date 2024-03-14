import { useEffect, ChangeEvent, FormEvent, useState } from 'react';

interface Todo {
  id: number | null;
  title: string;
}

interface InputProps {
  todo: Todo | null;
  addTodo: (title: string) => void;
  updateTodo: (id: number, title: string) => void;
  inputs: { title: string };
  setInputs: React.Dispatch<React.SetStateAction<{ title: string }>>;
}

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
    } else {
      updateTodo(todo.id, title);
      todo.id=null;
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
        className="newTodo-input"
        value={inputs.title}
        onChange={handleChange}
        placeholder="Title"
        name="title"
        required
      />
      <button type="submit" className="btn">
        {todo?.id ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default Input;
