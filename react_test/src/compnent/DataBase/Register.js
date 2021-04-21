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
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.pw]: event.target.value,
            [event.target.lore]: event.target.lore
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
                    <input type='text' name={'id'} placeholder='아이디' onChange={this.handleChange}/>
                    <input id='marginTop' type='text' name={'pw'} placeholder='비밀번호' onChange={this.handleChange}/>
                    <input id='marginTop' type='text' name={'lore'} placeholder='계정설명' onChange={this.handleChange}/>
                    <button id='marginTop' onClick={this.btnRegister}>회원가입</button>
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