import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const ToDoCard = ({ todo }) => {
    
  return (
    <div style={{ border: 'solid black 0.5px', marginLeft: "10vw", marginRight: "10vw", marginTop: "2vw"   }}>
      <h1>{todo.title}</h1>
      <h5>
        {todo.description}
      </h5>
    </div>
  );
};

export default ToDoCard;

/* 
*/
