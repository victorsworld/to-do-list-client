import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ToDoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const { setShouldRefresh } = useOutletContext();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setShouldRefresh(true);
    const newToDo = {
      title,
      description,
      priority,
    };
    navigate('/')
    setShouldRefresh(false)
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='title'> Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor='description'> Description: </label>
        <input value={description} onChange={(e) => setDescription(e.target.value)}/>
      </form>
    </div>
  );
};

export default ToDoForm;
