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
import './App.css'
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import counterApp from "./redux/reducers";
import {Provider} from "react-redux";
import Spring from "./spring/Spring";

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
             {/*<DBConnection /> DB연동 시도(삭제해도 됨)*/}
        </Provider>,
        document.getElementById('root')
    );
}
tick();
reportWebVitals();
