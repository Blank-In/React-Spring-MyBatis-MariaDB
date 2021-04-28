import React from "react";
import {connect} from "react-redux";
import Slot from "./Slot";

class Board extends React.Component{
    status=0;
    timer=null;

    constructor(props) {
        super(props);
        let tempSlot=[0,0,0,0,0,0,0,0,0,0];
        let tempBoard=[];
        for(let a=0;a<tempSlot.length;++a){
            tempBoard.push(tempSlot.slice());
        }
        this.state={
            enemy:'', //상대방
            board: tempBoard,
            turn:0, //자신의 턴 1or2
            b_id:'', //사용하는 보드의 프라이머리키
            b_turn: 2 //마지막으로 말을 놓은 플레이어
        }
    }

    tick=()=>{
        console.log(this.status);
        if(this.status===1){
            this.findMatching();
        }
        else if(this.status===2&&this.state.b_turn===this.state.turn){
            this.boardGet();
        }
    }

    findMatching(){
        fetch(`api/findMatching`)
            .then(res=>res.json())
            .then(data=>this.checkMatching(data))
    }
    checkMatching(data){
        if(data.matching==='false'){
            this.status=1;
        }
        else{
            console.log(data.matching+" find!");
            this.status=2;
            let b_id;
            if(data.turn===1){
                b_id=this.props.id+"-"+data.matching;
                this.boardReset(b_id);
            }
            else{
                b_id=data.matching+"-"+this.props.id;
            }
            this.setState({
                enemy:data.matching,
                turn:data.turn,
                b_id:b_id
            });
        }
    }
    matching=()=>{
        const {id}=this.props;
        this.timer=setInterval(this.tick,5000);
        if(id===''){
            alert("로그인 후 이용할 수 있습니다");
        }
        else{
            fetch(`api/boardMatching?id=`+id)
                .then(res=>res.json())
                .then(data=>{
                    this.setState({
                        enemy:"상대방 찾는중"
                    })
                    this.checkMatching(data);
                });
        }
    }

    boardGet=()=>{
        const {b_id}=this.state;
        fetch(`api/getBoard?id='`+b_id+`'`)
            .then(res=>res.json())
            .then(data=>this.setState({
                board:JSON.parse(data.game),
                b_turn:data.turn
            }));
    }
    boardSet=()=>{
        const {b_id,board,turn}=this.state;
        fetch(`api/setBoard?id='`+b_id+`'&board='`+JSON.stringify(board)+`'&turn=`+turn)
            .then(res=>res.json())
            .then(data=>console.log(data));
    }
    boardReset=(b_id)=>{
        fetch(`api/resetBoard?id='`+b_id+`'&board='`+JSON.stringify(this.state.board)+`'`)
            .then(res=>res.json())
            .then(data=>console.log(data));
    }

    slotChange=(x,y)=>{
        let tempBoard=this.state.board.slice();
        const {b_turn,turn}=this.state;
        if(b_turn!==turn&&tempBoard[x][y]===0){
            tempBoard[x][y]=turn;
            this.setState({
                board:tempBoard,
                b_turn:turn
            });
            this.boardSet();
        }
    }

    render(){
        if(this.state.enemy!==''&&this.state.enemy!=='상대방 찾는중'){
            const {board}=this.state;
            let slots=[];
            for(let a=0;a<board.length;++a){
                slots.push([]);
                for(let b=0;b<board[a].length;++b){
                    slots.push(
                        <Slot
                            num={board[a][b]}
                            x={a}
                            y={b}
                            key={a*board.length+b}
                            slotChange={this.slotChange}
                        />
                    )
                }
            }
            return(
                <div id='comp'>
                    <h1>상대 : {this.state.enemy}</h1>
                    {slots}
                </div>
            )
        }
        return(
            <div id='comp'>
                <button onClick={this.matching}>보드 게임 상대방 찾기</button>
                <h1>{this.state.enemy}</h1>
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}
let mapStateToProps=(state)=>{
    return{
        id:state.counter.id
    }
}

Board=connect(mapStateToProps)(Board);
export default Board;