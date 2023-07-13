import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

import NavBar from './Components/NavBar';

function App() {
  const [toDos, setToDos] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const url = process.env.REACT_APP_URL_ENDPOINT;

  useEffect(() => {
    console.log("runnning")
    const getData = async () => {
      const response = await fetch(`${url}/todo/all-todo`);
      const data = await response.json();
      console.log(data);
      setToDos(data);
    };
    getData();
  }, [url, shouldRefresh]);

  return (
    <div class="mainbody">
      <NavBar />
      <Outlet context={{ toDos, setToDos, setShouldRefresh }} />
    </div>
  );
}

export default App;
