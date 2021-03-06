import React, {createRef} from "react";

class MultiCanvas extends React.Component {
    canvas = null;
    ctx = null;
    canvasRef = createRef();
    data = 0;
    f_x = 0;
    f_y = 0;

    constructor(props) {
        super(props);
        this.state = {
            r: 0,
            g: 0,
            b: 0,
            a: 100,
            flg: false
        };
    }

    tick = () => {
        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.data
            })
        }
        fetch('http://192.168.1.221:8080/api/getCanvases', request)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                for (let a = 0; a < data.length; ++a) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = data[a].color
                    this.ctx.moveTo(data[a].f_x, data[a].f_y);
                    this.ctx.lineTo(data[a].l_x, data[a].l_y);
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
                if (data.length > 0) {
                    this.data = data[data.length - 1].id;
                }
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    initDraw = (event) => {
        this.f_x = event.offsetX;
        this.f_y = event.offsetY;
    }
    finishDraw = (event) => {
        const {r, g, b, a} = this.state;
        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                f_x: this.f_x,
                f_y: this.f_y,
                l_x: event.offsetX,
                l_y: event.offsetY,
                color: 'rgba(' + r + ',' + g + ',' + b + ',' + (a / 100) + ')'
            })
        }
        fetch('http://192.168.1.221:8080/api/addCanvas', request)
            .then(res => res.json())
    }

    btnDown = () => {
        this.setState({
            flg: true
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.flg === true && prevState.flg === false) {
            this.canvas = this.canvasRef.current;
            this.ctx = this.canvas.getContext('2d');
            this.canvas.addEventListener("mousedown", this.initDraw);
            this.canvas.addEventListener("mouseup", this.finishDraw);
            setInterval(this.tick, 1000);
        }
    }

    render() {
        const {r, g, b, a, flg} = this.state;
        if (flg) {
            return (
                <div id='comp'>
                    <canvas
                        id='canvas'
                        ref={this.canvasRef}
                        width='480'
                        height='360'
                        style={{
                            border: '3px solid rgba(' + r + ',' + g + ',' + b + ',' + (a / 100) + ')'
                        }}
                    />
                    <input id='slide' type='range' name={'r'} value={r} min='0' max='255' onChange={this.handleChange}/>
                    <input id='slide' type='range' name={'g'} value={g} min='0' max='255' onChange={this.handleChange}/>
                    <input id='slide' type='range' name={'b'} value={b} min='0' max='255' onChange={this.handleChange}/>
                    <input id='slide' type='range' name={'a'} value={a} min='0' max='100' onChange={this.handleChange}/>
                </div>
            );
        } else {
            return (
                <div id='comp'>
                    <button onClick={this.btnDown}>??????????????? ????????????</button>
                </div>
            )
        }
    }
}

export default MultiCanvas;