import React from "react";

class PopNotice extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            focused:false,
            notices:[{title:'제목',lore:'내용'}],
            index:0,
            left:0,
            right:1
        }
    }
    leftClick=()=>{
        if(this.state.index===1){
            this.setState({
                index:this.state.index-1,
                right:1,
                left:0
            });
        }
        else{
            this.setState({
                index:this.state.index-1,
                right:1
            });
        }
    }
    rightClick=()=>{
        if(this.state.index+2===this.state.notices.length){
            this.setState({
                index:this.state.index+1,
                left:1,
                right:0
            });
        }
        else{
            this.setState({
                index:this.state.index+1,
                left:1,
            })
        }
    }
    onClick = () => {
        if(this.state.focused){
            this.setState({
                focused: false
            })
        }
        else{
            fetch('api/getNotices')
                .then(res=>res.json())
                .then(data=>this.setState({
                    notices:data,
                    focused: true
                }));
        }
    }
    render(){
        const {notices,index,focused,left,right}=this.state;
        const id=focused ? 'popUp':'popDown';
        const text=focused ? '▼':'▲';
        return(
            <div id='pop' className={id}>
                <div onClick={this.onClick}>{text}</div>
                <h1>{notices[index].title}</h1>
                <hr/>
                <p>{notices[index].lore}</p>
                <button id='left' onClick={this.leftClick} style={{opacity:left}}>◀</button>
                <button id='right' onClick={this.rightClick} style={{opacity:right}}>▶</button>
            </div>
        )
    }
}
export default PopNotice;