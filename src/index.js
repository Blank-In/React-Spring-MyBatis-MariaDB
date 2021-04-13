import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import List from './List';
import Input from './Input';
import Temp from './Temp';
import reportWebVitals from './reportWebVitals';

function tick(){
    ReactDOM.render(
        <React.StrictMode>
            <App />
            <List />
            <Input />
            <Temp />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
setInterval(tick,1000);

reportWebVitals();
