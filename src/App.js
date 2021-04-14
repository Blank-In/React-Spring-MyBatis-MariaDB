import React from "react";
import './App.css'
import Component from './Component';

class App extends Component {
    state={
        posts:[
            {name:'이것은 제목입니다.', content:'이것은 제목이 아닙니다 주의사항을 잘 숙지하시길 바랍니다.'}
        ],
        name:'',
        content:'',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.content]: event.target.value
        });
    }
    btnDown = (event) => {
        if(this.state.name===''||this.state.name===''){
            alert("제목이나 내용을 비우지 마세요.");
            return;
        }
        this.setState({
            posts: this.state.posts.concat({
                name:this.state.name,
                content:this.state.content,
            }),
            name:'',
            content:'',
        });
    }
    render(){
        const postList=this.state.posts.map(
            ({name,content,})=>(
                <Component
                    name={name}
                    content={content}
                />
            )
        );
        return (
            <div>
                <h1 id="title">테스트 페이지</h1>
                <h2 id="time">{new Date().toLocaleTimeString()}</h2>
                <div id='toolMargin'/>
                {postList}
                <div id='comp'>
                    <input value={this.state.name} name={'name'} onChange={this.handleChange}/>
                    <hr id='marginTop'/>
                    <input value={this.state.content} name={'content'} onChange={this.handleChange}/>
                    <button id='marginTop' onClick={this.btnDown}>게시글 추가</button>
                </div>
            </div>
        )
    }
}

export default App;
