import React from 'react';

import './to-do-item.css';

export default class ToDoItem extends React.Component {
  render() {

    const {label, onDeleted,
           onToggleDone,
           onToggleImportant,
           done, important} = this.props;

    let classNames = 'to-do-item';
    if(done){
      classNames += ' done';
    };

    if(important) {
      classNames += ' important';
    }
      
    return (
      <span className={classNames}>
        <span
          className="to-do-item-lable"
          onClick={onToggleDone}>
          {label}
        </span>
        <div className='buttons'>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm delete-btn"
          onClick={onDeleted}>
          <i className="fa fa-trash-o"/>
        </button>
  
        <button
          type="button"
          className="btn btn-outline-success btn-sm exclamation-btn"
          onClick={onToggleImportant}>
          <i className="fa fa-exclamation"/>
        </button>
        </div>
      </span>
    );
  };
};