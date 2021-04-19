import React from "react";

class DBconnection extends React.Component{
    state={username:null};
    componentDidMount() {
        fetch('/api/getUsername')
            .then(res=>res.json())
            .then(user=>this.setState({username:user.username}));
    }
    render() {
        const {username}=this.state;
        return(
            <div id='comp'>
                {username}
            </div>
        )
    }
}
export default DBconnection;