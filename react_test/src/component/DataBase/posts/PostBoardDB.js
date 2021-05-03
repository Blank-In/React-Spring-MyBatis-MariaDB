import React from "react";
import PostDB from "./PostDB";
import {connect} from "react-redux";

class PostBoardDB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            title: '',
            lore: '',
            vFlg: false,
            style: {
                display: "none"
            }
        };
        fetch('api/getPosts')
            .then(res => res.json())
            .then(data => this.setState({
                posts: data
            }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleReload = () => {
        fetch('api/getPosts')
            .then(res => res.json())
            .then(data => this.setState({
                posts: data
            }));
    }
    handleRemove = (id, p_id) => {
        if (this.props.id !== id) {
            alert("작성자만 삭제할 수 있습니다.");
            return;
        }
        fetch('api/delPost?p_id=' + p_id)
            .then(res => res.json())
            .then(data => this.setState({
                posts: data
            }));
        alert("게시글이 삭제되었습니다.");
    }
    handleAdd = () => {
        const {title, lore} = this.state;
        const {id} = this.props;
        if (this.state.title === '' || this.state.lore === '') {
            alert("제목또는 내용을 비울 수 없습니다.");
            return;
        }
        fetch('api/addPost?title=' + title + '&lore=' + lore + '&id=' + id)
            .then(res => res.json())
            .then(data => this.setState({
                posts: data,
                title: '',
                lore: ''
            }))
    }
    handleToggle = () => {
        const {vFlg} = this.state;
        if (vFlg) {
            this.setState({
                vFlg: false,
                style: {
                    display: "none"
                }
            })
        } else {
            this.setState({
                vFlg: true,
                style: {
                    display: "block"
                }
            })
        }
    }

    render() {
        const {title, lore, style} = this.state;
        const postList = this.state.posts.map(
            (post) => (
                <PostDB
                    key={post.p_id}
                    title={post.title}
                    lore={post.lore}
                    p_id={post.p_id}
                    id={post.id}
                    u_lore={post.u_lore}
                    onRemove={this.handleRemove}
                />
            )
        );
        let addPost = (<div>
            <h2 id='comp'>글을 작성하려면 로그인이 필요합니다.</h2>
        </div>);
        if (this.props.id !== '') {
            addPost = (<div id='comp'>
                <input type='text' value={title} name={'title'} onChange={this.handleChange} placeholder='제목'/>
                <hr id='marginTop'/>
                <textarea id='lore' value={lore} name={'lore'} onChange={this.handleChange} placeholder='내용'/>
                <button id='marginTop' onClick={this.handleAdd}>게시글 추가</button>
            </div>);
        }
        return (
            <div id='postBoard'>
                <button onClick={this.handleToggle}>글 목록 ON/OFF</button>
                <div style={style}>
                    {postList}
                    <button id='reload' onClick={this.handleReload}>글 목록 새로고침</button>
                    {addPost}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.counter.id
    };
}
PostBoardDB = connect(mapStateToProps)(PostBoardDB);

export default PostBoardDB;
