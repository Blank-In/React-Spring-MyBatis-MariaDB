import Login from "./account/Login";
import Register from "./account/Register";
import PostBoardDB from "./posts/PostBoardDB";
import VoteStatus from "./vote/VoteStatus";
import ScoreBoard from "./scoreBoard/ScoreBoard";
import React from "react";
import Board from "./boardGame/Board";

class DataBase extends React.Component {
    render() {
        return (<div>
            <Login/>
            <Register/>
            <PostBoardDB/>
            <VoteStatus/>
            <ScoreBoard/>
            <Board/>
        </div>)
    };
}

export default DataBase;