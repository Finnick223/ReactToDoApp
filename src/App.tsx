// import { useState } from 'react';
import Input from '../src/components/Input'
import List from '../src/components/List'
import Button from '../src/components/Button'
import './index.css';

function App() {

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
        <List />
      </div>
    </>
  );
}

export default App;
