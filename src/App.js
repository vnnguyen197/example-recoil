import './App.css';
import React from 'react';
import {RecoilRoot} from 'recoil';
import { TodoList } from './components/TodoMain';

function App() {
  return (
    <RecoilRoot>
      <div className="todo-container">
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;