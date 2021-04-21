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

class Vote extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            votes:[]
        }
        fetch('api/getVote')
            .then(res=>res.json())
            .then(data=>this.setState({
                votes:data
            }));
    }

    render() {
        const {votes}=this.state;
        let cnt=0;
        for(let a=0;a<votes.length;++a){
            cnt+=votes[a].cnt;
        }
        const voteList=votes.map(
            (vote)=>(
                <div id='vote' style={{
                    width: 100/cnt*vote.cnt+'%',
                }}>
                    <h4>{vote.v_name} {vote.cnt}표</h4>
                </div>
            )
        );
        return(<div id='comp'>
            {voteList}
        </div>)
    }
}

export default Vote;