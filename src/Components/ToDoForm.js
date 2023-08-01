import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ToDoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const { setShouldRefresh, handleNewToDo } = useOutletContext();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setShouldRefresh(true);
    const newToDo = {
      title,
      description,
      priority,
    };
    handleNewToDo(newToDo);
    navigate('/');
    setShouldRefresh(false);
  };

  return (
    <div>
      <h1>What needs to be done ? </h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title"> Title: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="description"> Description: </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label> Priority: </label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
