import React from "react";
import SpringCon from "./SpringCon";
import Login from "./account/Login";
import Register from "./account/Register";

class SpringComponent extends React.Component {
    render() {
        return (
            <div>
                <SpringCon/>
                <Login/>
                <Register/>
            </div>
        );
    }
}

export default SpringComponent;