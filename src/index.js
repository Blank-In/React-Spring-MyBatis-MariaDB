import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import PostBoard from './Posts/PostBoard';
import List from './List';
import Input from './Input';
import Temp from './Temp';
import Gradient from './Gradation/Gradient';
import BalloonBox from "./Balloon/BalloonBox";
import PopUp from "./PopUp"
import Clock from "./Timer/Clock";
import './App.css'
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import counterApp from "./reducers";
import {Provider} from "react-redux";

const store = createStore(counterApp);

function tick(){
    ReactDOM.render(
         <Provider store={store}>
            <Header />
            <PostBoard />
            <List />
            <Input />
            <Temp />
            <Gradient/>
             <BalloonBox />
             <PopUp />
             <Clock />
        </Provider>,
        document.getElementById('root')
    );
}
tick();
reportWebVitals();
