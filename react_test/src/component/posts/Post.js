import React from "react";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cnt: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({cnt: state.cnt + 1}));
    }

    render() {
        const {name, content} = this.props;
        return (
            <div id="post">
                <h2>{name}</h2>
                <hr/>
                <h4>{content}</h4>
                <button id='marginTop' onClick={this.handleClick}>카운트 {this.state.cnt}</button>
            </div>
        )
    }
}

export default Post;
