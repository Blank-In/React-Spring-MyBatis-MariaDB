import React from "react";

class Color extends React.Component {
    handleRemove = () => {
        const {color, onRemove} = this.props;
        onRemove(color.id);
    }

    render() {
        const {r, g, b} = this.props;
        return (
            <div id='colorBox'>
                <div id='color' style={{
                    background: "rgb(" + r + "," + g + "," + b + ")"
                }}/>
                <button id='del' onClick={this.handleRemove}>제거</button>
            </div>
        )
    }
}

export default Color;