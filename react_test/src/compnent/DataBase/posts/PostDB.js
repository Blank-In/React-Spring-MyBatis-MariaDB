import React from "react";

class PostDB extends React.Component{
    handleRemove=()=>{
        const {id,key,onRemove}=this.props;
        onRemove(id,key);
    }
    render(){
        const {title, lore, id, u_lore}=this.props;
        return(
            <div id="post">
                <h2>{title}</h2>
                <h4>작성자 : {id}({u_lore})</h4>
                <hr/>
                <h3>{lore}</h3>
                <button id='marginTop' onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PostDB;
