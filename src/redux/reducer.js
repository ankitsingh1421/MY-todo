// // reducers.js
// import { useState } from 'react';
// import {
//   ADD_TODO,
//   TOGGLE_TODO,
//   REMOVE_TODO,
//   MARK_COMPLETED,
//   MARK_INCOMPLETE,
//   FILTER_TODOS,
//   MARK_ALL_COMPLETED,
//   UPDATE_SEARCH_TERM,
// } from './actionTypes';

// const initialState = { todos: [], filter: 'ALL', searchTerm: '' ,chnaged:true};

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         todos: [...state.todos, { text: action.payload.text, completed: false }],
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       };

//     case TOGGLE_TODO:
//       return {
//         todos: state.todos.map((todo, index) =>
//           index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
//         ),
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       };

//     case REMOVE_TODO:
//       return {
//         todos: state.todos.filter((todo, index) => index !== action.payload.id),
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       };

//     case MARK_COMPLETED:
//       return {
//         todos: state.todos.map((todo, index) =>
//           index === action.payload.id ? { ...todo, completed: true } : todo
//         ),
//         chnaged: !chnaged,
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       };

//     case MARK_INCOMPLETE:
//       return {
//         todos: state.todos.map((todo, index) =>
//           index === action.payload.id ? { ...todo, completed: false } : todo
//         ),
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       };

//     case FILTER_TODOS:
//       return {
//         todos: state.todos,
//         filter: action.payload.filter,
//         searchTerm: state.searchTerm,
//       };

//     case UPDATE_SEARCH_TERM:
//       return {
//         todos: state.todos,
//         filter: state.filter,
//         searchTerm: action.payload.searchTerm,
//       };

//     case MARK_ALL_COMPLETED:
//       return {
//         todos: state.todos.map((todo) => ({ ...todo, completed: true })),
//         filter: state.filter,
//         searchTerm: state.searchTerm,
//       };

//     default:
//       return state;
//   }
// };

// export default todoReducer;

// reducers.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from './actionTypes';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todosState');
    return serializedState ? JSON.parse(serializedState) : { todos: [], filter: 'ALL', searchTerm: '', changed: true };
  } catch (e) {
    console.warn('Could not load state', e);
    return { todos: [], filter: 'ALL', searchTerm: '', changed: true };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todosState', serializedState);
  } catch (e) {
    console.warn('Could not save state', e);
  }
};

const initialState = loadState();

const todoReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_TODO:
      newState = {
        ...state,
        todos: [...state.todos, { text: action.payload.text, completed: false }],
      };
      break;

    case TOGGLE_TODO:
      newState = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
      break;

    case REMOVE_TODO:
      newState = {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
      };
      break;

    case MARK_COMPLETED:
      newState = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
      };
      break;

    case MARK_INCOMPLETE:
      newState = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
      };
      break;

    case FILTER_TODOS:
      newState = { ...state, filter: action.payload.filter };
      break;

    case UPDATE_SEARCH_TERM:
      newState = { ...state, searchTerm: action.payload.searchTerm };
      break;

    case MARK_ALL_COMPLETED:
      newState = {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };
      break;

    default:
      newState = state;
  }

  saveState(newState); // Save the updated state to localStorage
  return newState;
};

export default todoReducer;
