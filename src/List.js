import React from "react";

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            post: [
                {title : '루피'},
                {title : '뽀로로'},
                {title : '반다크홈'},
                {title : '보라돌이'},
            ]
        }
    }
    render(){
        let { post }=this.state;
        const postList=post.map((post)=><li>{post.title}</li>);
        return(
            <ul>
                {postList}
            </ul>
        )
    }
}
export default List;
