// главный файл
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import FoodStore from './store/FoodStore';

export const Context  = createContext(null)

// ReactDOM.render(
//   <Context.Provider value = {{
//     user: new UserStore(),
//     food: new FoodStore(),
//   }}>
//     <App />
//   </Context.Provider>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider value = {{
    user: new UserStore(),
    food: new FoodStore(),
  }}>
    <App />
  </Context.Provider>,
);
