import React from "react";

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: 5
        }
    }

    handleChange = (event) => {
        this.setState({
            select: event.target.value,
        });
    }
    handleClick = () => {
        const {onClick, id} = this.props;
        const {select} = this.state;
        onClick(id, select);
    }

    render() {
        const {score, cnt, lore} = this.props;
        return (
            <div id='score'>
                <h3>{lore}</h3>
                <hr/>
                <h4>{score.toFixed(2)}점</h4>
                <h5>({cnt}명)</h5>
                <select onChange={this.handleChange}>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
                <button onClick={this.handleClick}>점으로 평가 남기기</button>
            </div>
        )
    }
}

export default Score;