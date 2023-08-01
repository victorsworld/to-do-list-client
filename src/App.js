import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import NavBar from './Components/NavBar';

function App() {
  const [toDos, setToDos] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const url = process.env.REACT_APP_URL_ENDPOINT;

  useEffect(() => {
    setShouldRefresh(true);
    const getData = async () => {
      const response = await fetch(`${url}/todo/all-todo`);
      const data = await response.json();
      console.log(data);
      setToDos(data);
    };
    getData();
    setShouldRefresh(false);
  }, [url, shouldRefresh]);

  const handleNewToDo = async (todo) => {
    setShouldRefresh(true);
    const response = await fetch(`${url}/todo/new-todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    console.log(response);
    const data = await response.json();
    setShouldRefresh(false);
    console.log('data', data);
  };

  return (
    <div class="mainbody">
      <NavBar />
      <Outlet context={{ toDos, setToDos, setShouldRefresh, handleNewToDo }} />
    </div>
  );
}

export default App;
