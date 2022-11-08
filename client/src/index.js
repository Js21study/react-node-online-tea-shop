import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import TeaStore from "./store/TeaStore";
import './index.css';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        tea: new TeaStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

