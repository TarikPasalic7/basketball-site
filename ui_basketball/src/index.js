import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import {createStore,applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { searchTeams } from './Reducers';


const logger = createLogger();
const store = createStore(searchTeams,applyMiddleware(logger));

ReactDOM.render(

 <React.StrictMode>
   <Provider store={store}>  <App /> 
   </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);
 //** */ Provider component takes cara of passing down the store to all the component adn we use connect to finish the connection
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 