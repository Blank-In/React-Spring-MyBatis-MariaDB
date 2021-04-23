import React from "react";

class Beat extends React.Component{
    ms=300;
    constructor(props) {
        super(props);
        this.state={
            flg:true
        }
        setTimeout(this.swap,this.ms);
    }
    swap=()=>{
        if(this.state.flg){
            setTimeout(this.swap,100);
        }
        else{
            setTimeout(this.swap,this.ms);
        }
        this.setState({
            flg:!this.state.flg
        });
    }
    render(){
        let style={
            background:"red",
            width:"150px",
            height: "100px"
        }
        if(!this.state.flg){
            style={
                background: "black",
                width:"100px",
                height:"100px"
            }
        }
        return(
            <div style={style}>
            </div>
        )
    }
}

export default Beat;