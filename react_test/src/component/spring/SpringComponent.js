import React from "react";
import SpringCon from "./SpringCon";
import Login from "./component/account/Login";
import Register from "./component/account/Register";
import PostBoardDB from "./component/PostBoardDB";
import VoteStatus from "./component/VoteStatus";
import ScoreBoard from "./component/ScoreBoard";
import Board from "./component/Board";
import MultiCanvas from "./component/MultiCanvas";

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
                <MultiCanvas/>
            </div>
        );
    }
}

export default SpringComponent;