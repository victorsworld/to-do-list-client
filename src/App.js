import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
const [toDos, setToDos] = useState([])

const url = process.env.REACT_APP_URL_ENDPOINT;




  return (
    <div>
      <NavBar/>

    </div>
  );
}

export default App;
