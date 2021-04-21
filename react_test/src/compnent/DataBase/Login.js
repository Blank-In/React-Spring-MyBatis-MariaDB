import React from "react";
import {flgSwap, setID} from "../../redux/actions";
import {connect} from "react-redux";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            flg:false,
            id:'',
            pw:'',
            lore:'로그인 되지 않았습니다.'
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.pw]: event.target.value
        });
    }
    btnLogin=()=>{
        const {id,pw}=this.state;
        fetch('api/login?id='+id+"&pw="+pw)
            .then(res=>res.json())
            .then(data=>this.setState({
                flg:data.flg,
                lore:data.lore
            }));
        this.props.onSetId(id);
    }
    btnLogout=()=>{
        this.setState({
            flg:false,
            lore:'로그인 되지 않았습니다.'
        });
        this.props.onFlgSwap(false);
    }
    render(){
        const {flg}=this.state;
        if(flg){
            this.props.onFlgSwap(true);
            return(
                <div id='comp'>
                    <button onClick={this.btnLogout}>로그아웃</button>
                    <hr id='marginTop'/>
                    <h1>로그인 되었습니다. {this.state.lore}</h1>
                </div>
            );
        }
        else{
            return(
                <div id='comp'>
                    <input type='text' name={'id'} onChange={this.handleChange} placeholder='아이디'/>
                    <input id='marginTop' type='text' name={'pw'} onChange={this.handleChange} placeholder='비밀번호'/>
                    <button id='marginTop' onClick={this.btnLogin}>로그인</button>
                    <hr id='marginTop'/>
                    <h1>{this.state.lore}</h1>
                </div>
            );
        }
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        onFlgSwap: (flg)=>dispatch(flgSwap(flg)),
        onSetId: (id)=>dispatch(setID(id))
    }
}

let mapStateToProps=(state)=>{
    return{
        id:state.counter.id,
        logFlg:state.counter.logFlg
    };
}

Login=connect(mapStateToProps,mapDispatchToProps)(Login);
export default Login;