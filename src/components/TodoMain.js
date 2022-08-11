import {TodoItem} from './TodoItem';
import {TodoItemCreator} from './TodoItemCreator';
import {TodoListFilters} from './TodoListFilters';
import {TodoListStats} from './TodoListStats';
import React from 'react';
import {useRecoilValue} from 'recoil';
import { filteredTodoListState } from '../recoil/selectors/todoSelector';

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem, index) => (
        <TodoItem key={todoItem.id} item={todoItem} index={index} />
      ))}
    </>
  );
};