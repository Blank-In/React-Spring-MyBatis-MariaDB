import React from "react";
import Post from './Post';

class PostBoard extends Post {
    id=1;
    constructor() {
        super();
        this.state={
            posts:[
                {
                    name:'이것은 제목입니다.',
                    content:'이것은 제목이 아닙니다 주의사항을 잘 숙지하시길 바랍니다.',
                    id:0
                }
            ],
            name:'',
            content:'',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.content]: event.target.value
        });
    }
    btnDown = () => {
        if(this.state.name===''||this.state.content===''){
            alert("제목이나 내용을 비우지 마세요.");
            return;
        }
        this.setState({
            posts: this.state.posts.concat({
                name:this.state.name,
                content:this.state.content,
                id:this.id++
            }),
            name:'',
            content:'',
        });
    }
    render(){
        const postList=this.state.posts.map(
            (post)=>(
                <Post
                    name={post.name}
                    content={post.content}
                    key={post.id}
                />
            )
        );
        return (
            <div>
                {postList}
                <div id='postAdd'>
                    <input value={this.state.name} name={'name'} onChange={this.handleChange} placeholder='제목'/>
                    <hr/>
                    <input value={this.state.content} name={'content'} onChange={this.handleChange} placeholder='내용'/>
                    <button id='marginTop' onClick={this.btnDown}>게시글 추가</button>
                </div>
            </div>
        )
    }
}

export default PostBoard;
