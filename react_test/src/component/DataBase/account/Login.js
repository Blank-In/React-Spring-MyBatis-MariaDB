import React from "react";
import {setID} from "../../../redux/actions";
import {connect} from "react-redux";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flg: false,
            id: '',
            pw: '',
            lore: '로그인 되지 않았습니다.'
        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (!this.state.flg && nextState.flg) {
            this.props.onSetId(this.state.id);
        }
        return true;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    btnLogin = () => {
        const {id, pw} = this.state;
        fetch('api/login?id=' + id + '&pw=' + pw)
            .then(res => res.json())
            .then(data => this.setState({
                flg: data.flg,
                lore: data.lore
            }));
    }
    btnLogout = () => {
        this.setState({
            flg: false,
            lore: '로그인 되지 않았습니다.',
            id: '',
            pw: ''
        });
        this.props.onSetId('');
    }

    render() {
        const {flg} = this.state;
        if (flg) {
            return (
                <div id='post'>
                    <button onClick={this.btnLogout}>로그아웃</button>
                    <hr id='marginTop'/>
                    <h2>로그인 되었습니다. {this.state.lore}</h2>
                </div>
            );
        } else {
            return (
                <div id='post'>
                    <input type='text' name={'id'} onChange={this.handleChange} placeholder='아이디'/>
                    <input id='marginTop' type='text' name={'pw'} onChange={this.handleChange} placeholder='비밀번호'/>
                    <button id='marginTop' onClick={this.btnLogin}>로그인</button>
                    <hr id='marginTop'/>
                    <h2>{this.state.lore}</h2>
                </div>
            );
        }
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSetId: (id) => dispatch(setID(id))
    };
}
let mapStateToProps = (state) => {
    return {
        id: state.counter.id,
    };
}
Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;