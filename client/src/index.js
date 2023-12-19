// главный файл
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import FoodStore from './store/FoodStore';

export const Context  = createContext(null)

ReactDOM.render(
  <Context.Provider value = {{
    user: new UserStore(),
    food: new FoodStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


