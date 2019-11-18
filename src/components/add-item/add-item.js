import React from 'react';

import './add-item.css';

export default class AddItem extends React.Component {

  constructor () {
    super();
    this.state = {
      label: ''
    };
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render () {
    return (
      <form
        className='add-item'
        onSubmit={this.onSubmit}>
          <input 
            type='text'
            className='form-control to-do-input'
            onChange={this.onLabelChange}
            placeholder='Input your to do'
            value={this.state.label}
          />
        <button
          className='btn btn-outline-secondary add-btn'>
          Add Item
        </button>
      </form>
    );
  };
};