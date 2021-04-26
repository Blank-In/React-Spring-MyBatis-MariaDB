import React from 'react';
import ReactDOM from 'react-dom';
import Header from './compnent/Header';
import SpringCon from "./spring/SpringCon";
import './App.css'
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import counterApp from "./redux/reducers";
import {Provider} from "react-redux";
import PopNotice from "./compnent/DataBase/PopNotice";
import BalloonBox from "./compnent/balloon/BalloonBox";
import Gradient from "./compnent/gradation/Gradient";
import Temp from "./compnent/Temp";
import Clock from "./compnent/timer/Clock";
import DataBase from "./compnent/DataBase/DataBase";

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
            <Input />
                */}
            <Temp />
            <Gradient/>
            <BalloonBox />
            <Clock />
            <SpringCon />
            <DataBase />
        </Provider>,
        document.getElementById('root')
    );
}
tick();
reportWebVitals();
