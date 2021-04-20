import React from "react";
import {connect} from "react-redux";

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            status:"회원가입을 해주세요.",
            id:"",
            pw:"",
            lore:"",
            flg:false
        }
    }
    iChange = (event) => {
        this.setState({
            id: event.target.value
        });
    }
    pChange = (event) => {
        this.setState({
            pw: event.target.value
        });
    }
    lChange = (event) => {
        this.setState({
            lore: event.target.value
        });
    }
    btnRegister=()=>{
        const {id,pw,lore}=this.state;
        if(id===""||pw===""){
            this.setState({
                status:"아이디와 비밀번호를 비우지마세요."
            })
        }
        else{
            fetch('api/register?id='+id+"&pw="+pw+"&lore="+lore)
                .then(res=>res.json())
                .then(data=>this.setState({
                    flg:data.flg,
                    status:data.status
                }));
        }
    }
    render() {
        const {flg,status}=this.state;
        if(this.props.logFlg){
            return(
                <div id='comp'>
                    <h1>{this.props.id} 로그인이 되어있습니다.</h1>
                </div>
            )
        }
        else if(flg){
            return(
                <div id='comp'>
                    <h1>{status}</h1>
                </div>
            )
        }
        else{
            return(
                <div id='comp'>
                    <input type='text' placeholder='아이디' onChange={this.iChange}/><br/>
                    <input type='text' placeholder='비밀번호' onChange={this.pChange}/><br/>
                    <input type='text' placeholder='계정설명' onChange={this.lChange}/><br/>
                    <button onClick={this.btnRegister}>회원가입</button>
                    <hr id='marginTop'/>
                    <h1>{status}</h1>
                </div>
            )
        }
    }
}

let mapStateToProps=(state)=>{
    return{
        id:state.counter.id,
        logFlg:state.counter.logFlg
    };
}

Register=connect(mapStateToProps)(Register);
export default Register;