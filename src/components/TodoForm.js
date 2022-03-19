import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='todo'
        id='todo'
        placeholder='Add a todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='todo-input'
      />
      <button className='todo-button'>Add Todo</button>
    </form>
  );
};

export default TodoForm;
