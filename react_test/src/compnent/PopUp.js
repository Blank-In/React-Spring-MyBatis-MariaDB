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
        const text=this.state.focused ? '▼':'▲';
        return(
            <div id='pop' className={id}>
                <div onClick={this.focus}>{text}</div>
            </div>
        )
    }
}
export default PopUp;