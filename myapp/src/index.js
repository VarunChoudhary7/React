import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from './reducer/reducer';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const chores = [
  {
    id: 1,
    text: "Take food"
  },
  {
    id: 2,
    text: "Sleep"
  },
  {
    id: 3,
    text: "Fun"
  },
]

const store = createStore(reducer, chores, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

