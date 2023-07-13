import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import ToDoCard from './ToDoCard';

const HomePage = () => {
  const { toDos, setToDos, setShouldRefresh } = useOutletContext();
  const todos = toDos.data; 
  return (
    <div>
        <h1>To Do List</h1>
      {toDos.success && (
        <div>
          {todos.map((todo) => {
            return <ToDoCard key={todo._id} todo={todo} />;
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
