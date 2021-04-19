import React from "react";

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            post: [
                {id:0, title : '루피'},
                {id:1, title : '뽀로로'},
                {id:2, title : '반다크홈'},
                {id:3, title : '보라돌이'},
            ]
        }
    }
    render(){
        let { post }=this.state;
        const postList=post.map((post)=><li key={post.id}>{post.title}</li>);
        return(
            <ul>
                {postList}
            </ul>
        )
    }
}
export default List;
