import React from "react";

class PopUp extends React.Component{
    state={
        focused:false
    }
    focus = () => {
        this.setState((state) => ({focused: !state.focused}))
    }
    render(){
        const id=this.state.focused ? 'popUp':'popDown';
        return(
            <div id='pop' className={id} onMouseOver={this.focus} onMouseLeave={this.focus}>
            </div>
        )
    }
}
export default PopUp;