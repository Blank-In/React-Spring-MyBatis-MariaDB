import React from "react";
import './App.css'
import Component from './Component';

function App() {
  return (
      <div>
          <h1 id="title">테스트 페이지</h1>
          <h2 id="time">{new Date().toLocaleTimeString()}</h2>
          <Component name={'제목1'} content={'내용물1'}/>
          <Component name={'제목2'} content={'내용물2'}/>
      </div>
  )
}

export default App;
