import React from 'react';
import ReactDOM from 'react-dom';
import Header from './compnent/Header';
import SpringCon from "./spring/SpringCon";
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
import PopNotice from "./compnent/DataBase/PopNotice";
import BalloonBox from "./compnent/balloon/BalloonBox";
import Gradient from "./compnent/gradation/Gradient";
import Temp from "./compnent/Temp";
import Clock from "./compnent/timer/Clock";

const store = createStore(counterApp);
/*
ngrok http -host-header="localhost:3000" 3000
 */
function tick(){
    ReactDOM.render(
        <Provider store={store}>
            <Header />
            <PopNotice />
                {/*
            <PostBoard />
            <List />
            <Input />
                */}
            <Temp />
            <Gradient/>
            <BalloonBox />
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
