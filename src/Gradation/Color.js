import React from "react";

class Color extends React.Component{
    constructor(props) {
        super(props);
        this.state=({
            r:this.props.r,
            g:props.g,
            b:props.b
        })
    }
    render(){
        const {r,g,b}=this.state;
        return(
            <div id='colorBox'>
                <div id='color' style={{
                    background:"rgb("+r+","+g+","+b+")"
                }}/>
            </div>
        )
    }
}
export default Color;