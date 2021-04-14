import React from "react";
import Color from "./Color";

class Gradient extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            colors:[
                {r:255,g:228,b:225},
                {r:240,g:255,b:255}
            ],
            r:127,
            g:127,
            b:127
        }
    }
    rChange = (event) => {
        this.setState({
            r: event.target.value
        });
    }
    gChange = (event) => {
        this.setState({
            g: event.target.value
        });
    }
    bChange = (event) => {
        this.setState({
            b: event.target.value
        });
    }
    btnDown = (event) => {
        this.setState({
            colors: this.state.colors.concat({
                r:this.state.r,
                g:this.state.g,
                b:this.state.b
            })
        });
    }
    render(){
        const {r,g,b,colors}=this.state;
        const colorList=this.state.colors.map(
            ({r,g,b})=>(
                <Color
                    r={r}
                    g={g}
                    b={b}
                />
            )
        );
        let colorText="";
        for(let index=0;index<colors.length;++index){
            colorText+=",rgb("+colors[index].r+","+colors[index].g+","+colors[index].b+")"
        }
        const bar=(
            <div style={{
                width: "100%",
                height: "30px",
                boxShadow: "0 3px 6px darkgray",
                background: "linear-gradient(90deg"+colorText+")"
            }}>
            </div>
        );
        return(
            <div id="comp">
                <div id='colorList'>
                    {colorList}
                    <div id='colorBox'>
                        <div id='color' style={{
                            background:"rgb("+r+","+g+","+b+")"
                        }}/>
                        <input type='range' name={'r'} value={r} min='0' max='255' onChange={this.rChange}/>
                        <input type='range' name={'g'} value={g} min='0' max='255' onChange={this.gChange}/>
                        <input type='range' name={'b'} value={b} min='0' max='255' onChange={this.bChange}/>
                    </div>
                    <button onClick={this.btnDown}>색상추가</button>
                </div>
                {bar}
            </div>
        )
    }
}
export default Gradient;
