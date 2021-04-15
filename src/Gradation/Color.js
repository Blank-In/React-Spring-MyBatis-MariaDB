import React from "react";

class Color extends React.Component{
    constructor(props) {
        super(props);
        this.state=({
            r:props.r,
            g:props.g,
            b:props.b,
        })
    }
    handleRemove=()=>{
        const {color,onRemove}=this.props;
        onRemove(color.id);
    }
    render(){
        const {r,g,b}=this.state;
        return(
            <div id='colorBox'>
                <div id='color' style={{
                    background:"rgb("+r+","+g+","+b+")"
                }}/>
                <button id='del' onClick={this.handleRemove}>제거</button>
            </div>
        )
    }
}
export default Color;