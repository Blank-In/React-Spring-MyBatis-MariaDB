import React from 'react';
import ReactDOM from 'react-dom';
import Header from './compnent/Header';
import './App.css'
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import counterApp from "./redux/reducers";
import {Provider} from "react-redux";
import PopNotice from "./compnent/DataBase/PopNotice";
import DataBase from "./compnent/DataBase/DataBase";
import SpringCon from "./spring/SpringCon";

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
            <Temp />
            <Gradient/>
            <BalloonBox />
            <Clock />
                */}
            <SpringCon />
            <DataBase />
        </Provider>,
        document.getElementById('root')
    );
}
tick();
reportWebVitals();
