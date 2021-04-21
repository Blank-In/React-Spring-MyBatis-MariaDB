import React from "react";

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
            age: 0
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.age]: event.target.value
        });
    }
    render(){
        const {name} = this.state;
        const {age}=this.state;
        return(
            <div id='comp'>
                <form onSubmit={this.handleChange}>
                    <input id='marginBottom' type='text' name={'name'} value={name} onChange={this.handleChange}/>
                    <input id='marginBottom' type='number' name={'age'} value={age} onChange={this.handleChange}/>
                    <input id='marginBottom' type='submit' value='Submit'/>
                    <hr/>
                </form>
                <h2>{this.state.name}</h2>
                <h3>{this.state.age}</h3>
            </div>
        );
    }
}
export default Input;