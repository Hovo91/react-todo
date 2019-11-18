import React from 'react';

import ToDoItem from '../to-do-item/to-do-item';
import './to-do-list.css';

const ToDoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

  const elements = todos.map((item) => {
    const {key, ...itemProps} = item;
    return (
      <li key={key} className="list-group-item">
        <ToDoItem
          {...itemProps}
          onDeleted={() => onDeleted(key)}
          onToggleDone={() => onToggleDone(key)}
          onToggleImportant={() => onToggleImportant(key)}
          />
      </li>
    );
  });

  return (
    <ul className="list-group to-do-list">
      {elements}
    </ul>
  );
};

export default ToDoList;