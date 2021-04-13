import React from "react";

class Temp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            c: 0,
            f: 0,
            k: 0
        }
    }
    cChange = (event) => {
        this.setState({
            c:event.target.value,
            f:(event.target.value*9/5+32).toFixed(2),
            k:(event.target.value/1+273.15).toFixed(2)
        });
    }
    fChange = (event) => {
        this.setState({
            f:event.target.value,
            c:((event.target.value-32)*5/9).toFixed(2),
            k:((event.target.value/1+459.67)*5/9).toFixed(2)
        });
    }
    kChange = (event) => {
        this.setState({
            k: event.target.value,
            c: (event.target.value-273.15).toFixed(2),
            f: (event.target.value*9/5-459.67).toFixed(2)
        });
    }
    render() {
        const c=this.state.c;
        const f=this.state.f;
        const k=this.state.k;
        return (
            <div id='comp'>
                <form id='temp'>
                    <h4>섭씨 </h4>
                    <input value={c} type='number' name={'c'} onChange={this.cChange}/>
                    <h3>°C</h3>
                    <hr/>
                    <h4>화씨 </h4>
                    <input value={f} type='number' name={'f'} onChange={this.fChange}/>
                    <h3>°F</h3>
                    <hr/>
                    <h4>켈빈 </h4>
                    <input value={k} type='number' name={'k'} onChange={this.kChange}/>
                    <h3>K</h3>
                </form>
            </div>

        )
    }
}
export default Temp;