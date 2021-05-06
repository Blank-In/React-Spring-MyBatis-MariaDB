import React from "react";
import Score from "../../DataBase/scoreBoard/Score";

class ScoreBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: []
        }
        this.handleReload();
    }

    handleReload = () => {
        fetch('http://192.168.1.221:8080/api/getScores', {method: 'POST'})
            .then(res => res.json())
            .then(data => this.setState({
                scores: data
            }));
    }
    handleClick = (id, score) => {
        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: id,
                score: score
            })
        }
        fetch('http://192.168.1.221:8080/api/addScore', request)
            .then(res => res.json())
            .then(data => this.setState({
                scores: data
            }));
    }

    render() {
        const scoreList = this.state.scores.map(
            (score) => (
                <Score
                    key={score.id}
                    id={score.id}
                    lore={score.lore}
                    score={score.score}
                    cnt={score.cnt}
                    onClick={this.handleClick}
                />
            )
        );
        return (
            <div id='scoreBoard'>
                <h2 id='fLeft'>평가 남기기</h2>
                <button onClick={this.handleReload}>평점 새로고침</button>
                <hr/>
                {scoreList}
            </div>
        )
    }
}

export default ScoreBoard;