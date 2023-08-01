import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const ToDoCard = ({ todo }) => {
  return (
    <div
      style={{
        border: 'solid black 0.5px',
        marginLeft: '40vw',
        marginRight: '40vw',
        marginTop: '2vw',
        borderRadius: '10px',
        justifyContent: 'center',
      }}>
      <h1 class="card-header">{'Priority: ' + todo.priority}</h1>
      <div class="card-body">
        <h2 class="card-title"> {'Title: ' + todo.title} </h2>
        <div>
          <h3>Description: </h3>
        <p class="card-text">{todo.description}</p>
        </div>
        <button>Edit</button>
        <button>Delete</button>

        <label style={{fontSize: '15px'}}> Completed</label> <input type="checkbox"/>
      </div>
      <div class="card-footer">
        {'Date Created: ' + todo.creationDate.slice(0, 10)}
      </div>
    </div>

    //   <h1></h1>
    //   <h5>
    //
    //   </h5>
    // </div>
  );
};

export default ToDoCard;
