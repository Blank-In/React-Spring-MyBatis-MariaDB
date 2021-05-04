import React from "react";
import SpringCon from "./SpringCon";
import Login from "./account/Login";
import Register from "./account/Register";
import PostBoardDB from "./PostBoardDB";
import VoteStatus from "./VoteStatus";
import ScoreBoard from "./ScoreBoard";
import Board from "./Board";

class SpringComponent extends React.Component {
    render() {
        return (
            <div>
                <SpringCon/>
                <Login/>
                <Register/>
                <PostBoardDB/>
                <VoteStatus/>
                <ScoreBoard/>
                <Board/>
            </div>
        );
    }
}

export default SpringComponent;