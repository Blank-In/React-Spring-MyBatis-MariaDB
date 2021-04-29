import React from "react";
import Balloon from "./Balloon";

class BalloonBox extends React.Component {
    id = 7;

    constructor(props) {
        super(props);
        this.state = {
            balloons: [
                {id: 0, lore: "숨가쁘게 살아가는", r: 250, g: 160, b: 150},
                {id: 1, lore: "순간 속에도", r: 252, g: 166, b: 95},
                {id: 2, lore: "우린 서로 이렇게", r: 251, g: 239, b: 96},
                {id: 3, lore: "아쉬워 하는걸", r: 99, g: 221, b: 68},
                {id: 4, lore: "아직 내게 남아있는", r: 71, g: 170, b: 218},
                {id: 5, lore: "많은 날들을", r: 125, g: 135, b: 217},
                {id: 6, lore: "그대와 둘이서", r: 193, g: 107, b: 245}
            ]
        }
    }

    render() {
        const balloonList = this.state.balloons.map(
            (balloon) => (
                <Balloon
                    lore={balloon.lore}
                    r={balloon.r}
                    g={balloon.g}
                    b={balloon.b}
                    key={balloon.id}
                    id={balloon.id}
                />
            )
        );
        return (
            <div id='balloonBox'>
                {balloonList}
            </div>
        )
    }
}

export default BalloonBox;
