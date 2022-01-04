import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import './components/Form.css';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  render() {
    return (
      <div>
        {/* TodoListTemplate.js 호출 */}
        <TodoListTemplate form={<Form />}>
          <TodoItemList />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;