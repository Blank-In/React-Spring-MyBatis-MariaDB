import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import './App.css'
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import counterApp from "./redux/reducers";
import {Provider} from "react-redux";
import SpringComponent from "./component/spring/SpringComponent";

const store = createStore(counterApp);

/*
ngrok http -host-header="localhost:3000" 3000
 */
function tick() {
    ReactDOM.render(
        <Provider store={store}>
            <Header/>
                {/*
            <PostBoard />
            <Input />
            <Temp />
            <Gradient/>
            <BalloonBox />
            <Clock />
            <DataBase/>
                */}
            <SpringComponent/>
        </Provider>,
        document.getElementById('root')
    );
}

tick();
reportWebVitals();
