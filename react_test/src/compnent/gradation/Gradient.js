import React from "react";
import Color from "./Color";

class Gradient extends React.Component{
    id = 2;
    constructor(props) {
        super(props);
        this.state={
            colors:[
                {id:0,r:255,g:228,b:225},
                {id:1,r:240,g:255,b:255}
            ],
            r:Math.random()*256,
            g:Math.random()*256,
            b:Math.random()*256
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
    handleCreate = () => {
        this.setState({
            colors: this.state.colors.concat({
                r:this.state.r,
                g:this.state.g,
                b:this.state.b,
                id:this.id+1
            }),
            r:Math.random()*256,
            g:Math.random()*256,
            b:Math.random()*256
        });
        ++this.id;
    }
    handleRemove=(id)=>{
        const {colors}=this.state;
        this.setState({
           colors:colors.filter(color=>color.id!==id)
        });
    }
    render(){
        const {r,g,b,colors}=this.state;
        const colorList=colors.map(
            color=>(
                <Color
                    r={color.r}
                    g={color.g}
                    b={color.b}
                    color={color}
                    key={color.id}
                    onRemove={this.handleRemove}
                />
            )
        );
        let colorText;
        if(colors.length>1){
            colorText="linear-gradient(90deg";
            for(let index=0;index<colors.length;++index){
                colorText+=",rgb("+colors[index].r+","+colors[index].g+","+colors[index].b+")"
            }
            colorText+=")";
        }
        else if(colors.length===1){
            colorText="rgb("+colors[0].r+","+colors[0].g+","+colors[0].b+")"
        }
        else{
            colorText="white";
        }
        const bar=(
            <div style={{
                width: "100%",
                height: "30px",
                boxShadow: "0 3px 6px darkgray",
                background: colorText,
                marginBottom: 0
            }}>
            </div>
        );
        return(
            <div id="comp">
                <div id='colorList'>
                    {colorList}
                    <div id='colorBox'>
                        <div id='color' style={{background:"rgb("+r+","+g+","+b+")"}}/>
                        <input type='range' name={'r'} value={r} min='0' max='255' onChange={this.rChange}/>
                        <input type='range' name={'g'} value={g} min='0' max='255' onChange={this.gChange}/>
                        <input type='range' name={'b'} value={b} min='0' max='255' onChange={this.bChange}/>
                    </div>
                    <button id='add' onClick={this.handleCreate}>색상추가</button>
                </div>
                {bar}
            </div>
        )
    }
}
export default Gradient;
