import React from "react";

class Balloon extends React.Component{
    render(){
        const {lore,r,g,b}=this.props;
        return(
            <div id='balloon' style={{
                background: "rgb("+r+","+g+","+b+")",
            }}>
                <h3>{lore}</h3>
            </div>
        )
    }
}
export default Balloon;
