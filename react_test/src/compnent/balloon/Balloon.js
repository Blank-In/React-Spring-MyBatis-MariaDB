import React from "react";

class Balloon extends React.Component {
    flg = 0;

    constructor(props) {
        super(props);
        const {r, g, b, id} = this.props;
        this.state = {
            style: {
                background: "rgb(" + r + "," + g + "," + b + ")",
                left: (id * 200 + 400) + "px",
                opacity: 0
            }
        };
        setTimeout(this.tick, 1000);
    }

    tick = () => {
        const {r, g, b, id} = this.props;
        this.setState({
            style: {
                background: "rgb(" + r + "," + g + "," + b + ")",
                transition: "left " + (id * 0.1 + 1) + "s ease, opacity 1s ease",
                left: id * 105 + "px",
                opacity: 1
            }
        });
        ++this.flg
    }

    render() {
        const {lore} = this.props;
        const {style} = this.state;
        return (
            <div id='balloon' style={style}>
                <h3>{lore}</h3>
            </div>
        )
    }
}

export default Balloon;
