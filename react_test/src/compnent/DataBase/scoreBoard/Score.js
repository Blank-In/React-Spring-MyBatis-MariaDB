import React from "react";

class Score extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            select:5
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.select]: event.target.value,
        });
    }
    handleClick=()=>{
        const {onClick,id}=this.props;
        const {select}=this.state;
        onClick(id,select);
    }
    render(){
        const {score,cnt,lore}=this.props;
        return(
            <div id='score'>
                이름: {lore} | 평점: {score} | 평점을 남긴 수: {cnt}
                <select id={'select'} onChange={this.handleChange}>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
                <button onClick={this.handleClick}>평점 남기기</button>
            </div>
        )
    }
}

export default Score;