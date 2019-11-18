import React from 'react';

import './header.css'

const Header = ({toDo, done}) => {
  return(
    <div>
      <h1>My To Do List</h1>
      <h5>{toDo} more to do, {done} done</h5>
    </div>
  );
}

export default Header;