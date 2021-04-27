import React from "react";

class Slot extends React.Component{
    onClick=()=>{
        const {x,y,slotChange}=this.props;
        slotChange(x,y);
    }

    render() {
        let status='';
        if(this.props.num===1){
            status='●'
        }
        else if(this.props.num===2){
            status='○'
        }
        return (
            <button id='slot' onClick={this.onClick}>
                {status}
            </button>
        );
    }
}

export default Slot;