import React from 'react';

import Header from '../header/header';
import ToDoList from '../to-do-list/to-do-list';
import SearchPanel from '../search-panel/search-panel';
import AddItem from '../add-item/add-item';
import './app.css'

export default class App extends React.Component {
  
  maxId = 10;

  constructor () {
    super();
    this.state = {
      todoData: [
        this.createTodoItem('Drink coffee'),
        this.createTodoItem('Drink tea'),
        this.createTodoItem('Drink juce')
      ],
      term: '',
      filter: 'all',
    };
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      important: false,
      key: this.maxId++
    }
  };

  deleteItem = (key) => {
    this.setState(({todoData}) => {

      const index = todoData.findIndex((el) => el.key === key);
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];
      
      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState (({todoData}) => {
      const newTodoData = [...todoData, newItem];
      return {
        todoData: newTodoData
      };
    });
  };

  toggleProperyt = (arr, key, propName) => {
    const index = arr.findIndex((el) => el.key === key);
    const oldItem = arr[index];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  };

  onToggleImportant = (key) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperyt(todoData, key, 'important')
      };
    });
  };

  onToggleDone = (key) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperyt(todoData, key, 'done')
      };
    });
  };

  search = (items, term) => {
    if(term.length === 0) {
      return items;
    };
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onSearchChange = (term) => {
    this.setState({term});
  };

  render () {

    const {todoData, term} = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='to-do'>
        <Header
          toDo={todoCount}
          done={doneCount} 
        />
    
        <div className="search-block">
          <SearchPanel
            onSearchChange={this.onSearchChange} />
        </div>
    
        <ToDoList
          todos={visibleItems}
          onDeleted = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
        />

          <AddItem addItem={this.addItem} />
      </div>
    );
  };
};
