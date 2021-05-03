import React from "react";

class Alarm extends React.Component {
    handleRemove = () => {
        const {alarm, onRemove} = this.props;
        onRemove(alarm.id);
    }

    render() {
        const {hour, minute, lore} = this.props;
        return (
            <div id='alarm'>
                <h1 id='alarmTime'>{hour}시</h1>
                <h1 id='alarmTime'>{minute}분</h1>
                <p>{lore}</p>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default Alarm;