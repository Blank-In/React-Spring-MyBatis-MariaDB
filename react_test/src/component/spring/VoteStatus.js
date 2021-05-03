/*
user_vote
    유저아이디
    투표한 번호
vote_data
    투표 번호
    이름
*/
import React from "react";
import {connect} from "react-redux";
import Vote from "../DataBase/vote/Vote";

class VoteStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: []
        }
        this.onReload(this.props.id);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.id !== nextProps.id) {
            //this.onReload(nextProps.id);
            return false;
        }
        return true;
    }

    onReload = (id) => {
        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
            })
        }
        fetch('http://192.168.1.221:8080/api/getVotes', request)
            .then(res => res.json())
            .then(data => this.setState({
                votes: data
            }));
    }
    onBlank = () => {
        if (this.props.id !== '') {
            const request = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.props.id,
                })
            }
            fetch('http://192.168.1.221:8080/api/delVote', request)
                .then(res => res.json())
                .then(data => this.setState({
                    votes: data
                }));
        }
    }
    onVote = (num) => {
        if (this.props.id !== '') {
            const request = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: this.props.id,
                    vote: num
                })
            }
            fetch('http://192.168.1.221:8080/api/addVote', request)
                .then(res => res.json())
                .then(data => this.setState({
                    votes: data
                }));
        } else {
            alert('로그인 후 투표할 수 있습니다.');
        }
    }

    render() {
        const {votes} = this.state;
        let max = 0;
        for (let a = 0; a < votes.length; ++a) {
            if (max < votes[a].cnt) {
                max = votes[a].cnt;
            }
        }
        max += 0.5;
        const voteList = votes.map(
            (vote) => (
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
        return (<div id='comp'>
            <h2 id='fLeft'>제77대 대통령 선거</h2>
            <button id='reload' onClick={this.onReload(this.props.id)}>투표 현황 새로고침</button>
            <hr/>
            {voteList}
            <button onClick={this.onBlank}>기권</button>
        </div>)
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.counter.id
    };
}
VoteStatus = connect(mapStateToProps)(VoteStatus);

export default VoteStatus;