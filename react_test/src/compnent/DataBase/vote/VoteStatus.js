/*
user_vote
    유저아이디
    투표한 번호
vote_data
    투표 번호
    이름
현재 후보 목록과 투표 수 그래프 제작해놨음
투표 기능과 투표 제거 기능추가와 비주얼 향상
*/
import React from "react";
import {connect} from "react-redux";
import Vote from "./Vote";

class VoteStatus extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            votes:[]
        }
        fetch('api/getVote?id='+this.props.id)
            .then(res=>res.json())
            .then(data=>this.setState({
                votes:data
            }));
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props.id!==nextProps.id){
            fetch('api/getVote?id='+nextProps.id)
                .then(res=>res.json())
                .then(data=>this.setState({
                    votes:data
                }));
            return false;
        }
        return true;
    }
    onBlank=()=>{
        if(this.props.id!==''){
            fetch('api/delVote?id='+ this.props.id)
                .then(res=>res.json())
                .then(data=>this.setState({
                    votes:data
                }));
        }
    }
    onVote=(num)=>{
        if(this.props.id!==''){
            fetch('api/setVote?id='+ this.props.id+'&vote='+num)
                .then(res=>res.json())
                .then(data=>this.setState({
                    votes:data
                }));
        }
        else{
            alert('로그인 후 투표할 수 있습니다.');
        }
    }
    render() {
        const {votes}=this.state;
        let max=0;
        for(let a=0;a<votes.length;++a){
            if(max<votes[a].cnt){
                max=votes[a].cnt;
            }
        }
        ++max;
        const voteList=votes.map(
            (vote)=>(
                <Vote
                    max={max}
                    key={vote.num}
                    num={vote.num}
                    flg={vote.flg}
                    v_name={vote.v_name}
                    cnt={vote.cnt}
                    onVote={this.onVote}
                />
            )
        );
        return(<div id='comp'>
            <h2>제77대 대통령 선거</h2>
            <hr/>
            {voteList}
            <button onClick={this.onBlank}>기권</button>
        </div>)
    }
}

let mapStateToProps=(state)=>{
    return{
        id:state.counter.id
    };
}
VoteStatus=connect(mapStateToProps)(VoteStatus);

export default VoteStatus;