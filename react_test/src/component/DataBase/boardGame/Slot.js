import React from "react";

class Slot extends React.Component {
    onClick = () => {
        const {x, y, slotChange} = this.props;
        slotChange(x, y);
    }

    render() {
        let status = '';
        let style = {
            color: "black"
        }
        if (this.props.num > 0) {
            status = '●'
        }
        if (this.props.num === 2) {
            style = {
                color: "white"
            }
        }
        return (
            <button id='slot' onClick={this.onClick} style={style}>
                {status}
            </button>
        );
    }
}

export default Slot;