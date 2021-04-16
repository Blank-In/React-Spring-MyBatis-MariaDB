import React from "react";

class Header extends React.Component{
    render(){
        let style={
            background: "dimgray"
        }
        /*if(this.props.store.getState().value>0){
            style={
                background: "red",
                position: "fixed",
                left: "25%",
                top: "45%",
                zIndex: "100"
            }
            --this.props.store.getState().value;
        }*/
        return (
            <div>
                <h1 id="title" style={style}>테스트 페이지 {}</h1>
            </div>
        )
    }
}
export default Header;