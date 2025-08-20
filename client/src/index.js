import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import App from './App';
import { Provider } from "react-redux";
import '@ant-design/v5-patch-for-react-19';

// import reportWebVitals from './reportWebVitals';

import store from './redux/store'
import { userActions } from "./redux/actions";

import './index.css';
import './styles/_variables.css'
import './styles/index.css';
store.dispatch(userActions.fetchUserData());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> <Provider store={store}> <App /> </Provider> </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// reportWebVitals();
