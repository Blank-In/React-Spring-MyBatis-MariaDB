import React from "react";

class Vote extends React.Component{
    handleClick=()=>{
        const {num,onVote}=this.props;
        onVote(num);
    }
    render() {
        const {max,v_name,flg,cnt}=this.props;
        let color='whitesmoke';
        if(flg){
            color='orangered';
        }
        return(
            <button
                id='vote'
                style={{
                    width: (100/max*(cnt+0.5))+'%',
                    background: color
                }}
                onClick={this.handleClick}
            >
                <h4>{v_name} {cnt}표</h4>
            </button>
        )
    }
}

export default Vote;