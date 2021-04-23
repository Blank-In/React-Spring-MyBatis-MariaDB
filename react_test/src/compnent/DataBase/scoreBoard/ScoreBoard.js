import React from "react";
import Score from "./Score";

class ScoreBoard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            scores:[]
        }
        fetch('api/getScore')
            .then(res=>res.json())
            .then(data=>this.setState({
                scores:data
            }));
    }
    handleReload=()=>{
        fetch('api/getScore')
            .then(res=>res.json())
            .then(data=>this.setState({
                scores:data
            }));
    }
    handleClick=(id,add)=>{
        fetch('api/addScore?id='+id+'&add='+add)
            .then(res=>res.json())
            .then(data=>this.setState({
                scores:data
            }));
    }
    render() {
        const scoreList=this.state.scores.map(
            (score)=>(
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
        return(
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