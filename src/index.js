import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import List from './List';
import Input from './Input';
import Temp from './Temp';
import Gradient from './Gradation/Gradient';
import reportWebVitals from './reportWebVitals';

function tick(){
    ReactDOM.render(
        <React.StrictMode>
            <App />
            <div id='toolMargin'/>
            <List />
            <div id='toolMargin'/>
            <Input />
            <div id='toolMargin'/>
            <Temp />
            <div id='toolMargin'/>
            <Gradient />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
setInterval(tick,1000);

reportWebVitals();
