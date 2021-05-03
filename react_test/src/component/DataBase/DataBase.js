import Login from "./account/Login";
import Register from "./account/Register";
import PostBoardDB from "./posts/PostBoardDB";
import VoteStatus from "./vote/VoteStatus";
import ScoreBoard from "./scoreBoard/ScoreBoard";
import React from "react";
import Board from "./boardGame/Board";
import MultiCanvas from "./MultiCanvas";
import PopNotice from "./PopNotice";

class DataBase extends React.Component {
    render() {
        return (<div>
            <Login/>
            <Register/>
            <PostBoardDB/>
            <VoteStatus/>
            <ScoreBoard/>
            <Board/>
            <MultiCanvas/>
            <PopNotice/>
        </div>)
    };
}

export default DataBase;