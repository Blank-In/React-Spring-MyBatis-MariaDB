import React from "react";
import Balloon from "./Balloon";

class BalloonBox extends React.Component{
    id=2;
    constructor(props) {
        super(props);
        this.state={
            balloons:[
                {id:0,lore:"풍선을 타고 날아가는",r:250,g:160,b:150},
                {id:1,lore:"예쁜 꿈도 꾸었지",r:150,g:220,b:230}
            ]
        }
    }
    render(){
        const balloonList=this.state.balloons.map(
            (balloon) =>(
                <Balloon
                    lore={balloon.lore}
                    r={balloon.r}
                    g={balloon.g}
                    b={balloon.b}
                    id={balloon.id}
                />
            )
        );
        return(
            <div id='balloonBox'>
                {balloonList}
            </div>
        )
    }
}
export default BalloonBox;
