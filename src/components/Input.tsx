import { useEffect } from 'react';

const Input = ({ todo, addTodo, updateTodo, inputs, setInputs }: {todo: any, addTodo: any, updateTodo:any, inputs:any, setInputs:any}) => {
  useEffect(() => {
    if (todo) {
      setInputs({ title: todo.title });
    }
  }, [todo, setInputs]);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { title } = inputs;
    if (!todo.id) {
      addTodo(title);
      return;
    }
    updateTodo(todo.id, title);
    todo.id=null;
    setInputs({ title: ''})
  };
  const handleChange = (event: any) => {
    event.persist();
    setInputs((inputs: any) => ({
      ...inputs,
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
      <button type="submit" className="btn" onClick={handleSubmit}>
        {todo.id ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default Input;
