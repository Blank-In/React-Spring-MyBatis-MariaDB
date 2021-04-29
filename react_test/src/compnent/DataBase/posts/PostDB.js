import React from "react";

class PostDB extends React.Component {
    handleRemove = () => {
        const {id, p_id, onRemove} = this.props;
        onRemove(id, p_id);
    }

    render() {
        const {title, lore, id, u_lore} = this.props;
        return (
            <div id="post">
                <h3>{title}</h3>
                <h5>작성자 : {id}({u_lore})</h5>
                <hr/>
                <p>{lore}</p>
                <button id='marginTop' onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PostDB;
