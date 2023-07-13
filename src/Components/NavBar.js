import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to="/"> Home Page </Link> <Link to="/create-todo">New Task</Link>
    </div>
  )
}

export default NavBar