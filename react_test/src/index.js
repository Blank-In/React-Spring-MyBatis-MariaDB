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
import SpringCon from "./spring/SpringCon";
import Clock from "./compnent/timer/Clock";
import Login from "./compnent/DataBase/Login";
import './App.css'
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import counterApp from "./redux/reducers";
import {Provider} from "react-redux";
import Register from "./compnent/DataBase/Register";
import PostBoardDB from "./compnent/DataBase/posts/PostBoardDB";
import VoteStatus from "./compnent/DataBase/vote/VoteStatus";
import ScoreBoard from "./compnent/DataBase/scoreBoard/ScoreBoard";

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
            <SpringCon />
            <Login />
            <Register />
            <PostBoardDB />
            <VoteStatus />
            <ScoreBoard />
        </Provider>,
        document.getElementById('root')
    );
}
tick();
reportWebVitals();
