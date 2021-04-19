import React from "react";
import {connect} from "react-redux";
import {setValue} from "../redux/actions";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            style: {
                background: "dimgray"
            },
            lore:"테스트 페이지"
        };
        setInterval(this.tick,1000);
    }

    tick=()=>{
        if(this.props.value>0){
            this.setState({
                style:{
                    background: "red",
                    position: "fixed",
                    left: "25%",
                    top: "45%",
                    zIndex: "100"
                },
                lore:"울리다. 알람"
            })
            this.props.onSetValue(this.props.value-1);
        }
        else{
            this.setState({
                style: {
                    background: "dimgray"
                },
                lore:"테스트 페이지"
            });
        }
    }
    render(){
        const {value}=this.props;
        const {style,lore}=this.state;
        return (
            <div>
                <h1 id="title" style={style}>{lore} {value}</h1>
            </div>
        )
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        onSetValue: (value)=>dispatch(setValue(value))
    }
}

let mapStateToProps=(state)=>{
    return{
        value:state.counter.value
    };
}

Header=connect(mapStateToProps,mapDispatchToProps)(Header);
export default Header;