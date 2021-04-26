import React from "react";
import {connect} from "react-redux";

class Board extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            enemy:''
        }
    }

    findMatching(){
        fetch(`api/findMatching`)
            .then(res=>res.json())
            .then(data=>this.checkMatching(data.matching))
    }

    checkMatching(matching){
        if(matching==='false'){
            this.findMatching();
            console.log('finding...');
        }
        else{
            console.log(matching+" find!");
            this.setState({
                enemy:matching
            })
        }
    }
    matching=()=>{
        const {id}=this.props;
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
                    this.checkMatching(data.matching);
                });
        }
    }

    handleGet=()=>{
        const id='test';
        fetch(`api/getBoard?id=`+id)
            .then(res=>res.json())
            .then(data=>this.setState({
                board:JSON.parse(data[0].game)
            }));
    }
    handleSet=()=>{
        const id='test';
        fetch(`api/setBoard?id=`+id+`&board=`+JSON.stringify(this.state.board)+``)
            .then(res=>res.json())
            .then(data=>console.log(data));
    }

    render(){
        return(<div id='comp'>
            <button onClick={this.matching}>매칭잡기</button>
            <h1>{this.state.enemy}</h1>
        </div>)
    }
}
let mapStateToProps=(state)=>{
    return{
        id:state.counter.id
    };
}

Board=connect(mapStateToProps)(Board);
export default Board;