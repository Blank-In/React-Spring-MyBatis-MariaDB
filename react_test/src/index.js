import React from 'react';
import ReactDOM from 'react-dom';
import Header from './compnent/Header';
import PostBoard from './compnent/posts/PostBoard';
import List from './compnent/List';
import Input from './compnent/Input';
import Temp from './compnent/Temp';
import Gradient from './compnent/gradation/Gradient';
import BalloonBox from "./compnent/balloon/BalloonBox";
import PopUp from "./compnent/PopUp"
import Clock from "./compnent/timer/Clock";
import Login from "./compnent/DataBase/Login";
import './App.css'
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import counterApp from "./redux/reducers";
import {Provider} from "react-redux";
import Spring from "./spring/Spring";
import Register from "./compnent/DataBase/Register";
import DBpostBoard from "./compnent/DataBase/DBpostBoard";

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
            <Spring />
            <Login />
            <Register />
            <DBpostBoard />
        </Provider>,
        document.getElementById('root')
    );
}
tick();
reportWebVitals();
