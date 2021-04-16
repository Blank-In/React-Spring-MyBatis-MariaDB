import React from "react";
import Alarm from "./Alarm";
import {connect} from 'react-redux';
import {increment,decrement} from "../actions";

class Clock extends React.Component{
    id=2;
    constructor(props) {
        super(props);
        this.state={
            alarms:[
                {id:0,hour:18,minute:55,lore:'5분전'},
                {id:1,hour:19,minute:0,lore:'7시'}
            ],
            hour: 0,
            minute: 0,
            lore: ''
        }
    }
    hChange=(event)=>{
        this.setState({
            hour:event.target.value
        })
    }
    mChange=(event)=>{
        this.setState({
            minute:event.target.value
        })
    }
    lChange=(event)=>{
        this.setState({
            lore:event.target.value
        })
    }
    handleCreate=()=>{
        this.setState({
            alarms: this.state.alarms.concat({
                id: this.id++,
                hour: parseInt(this.state.hour),
                minute: parseInt(this.state.minute),
                lore: this.state.lore
            }),
            hour: 0,
            minute: 0,
            lore: ''
        });
    }
    handleRemove=(id)=>{
        const {alarms}=this.state;
        this.setState({
            alarms:alarms.filter(alarm=>alarm.id!==id)
        });
    }
    render() {
        const {alarms}=this.state;
        for(let index=0;index<alarms.length;++index){
            const alarm=alarms[index];
            if(alarm.hour===new Date().getHours()&&alarm.minute.valueOf()===new Date().getMinutes()){
                //this.props.onIncrement();
                this.handleRemove(alarm.id);
            }
        }
        const alarmList=alarms.map(
            alarm=>(
                <Alarm
                    hour={alarm.hour}
                    minute={alarm.minute}
                    alarm={alarm}
                    lore={alarm.lore}
                    onRemove={this.handleRemove}
                />
            )
        );

        return (
            <div id='comp'>
                <h2 id="time">{new Date().toLocaleTimeString()}</h2>
                {alarmList}
                <div id='alarm'>
                    <input id='newTime' value={this.state.hour} type='number' onChange={this.hChange}/>
                    <h1>시</h1>
                    <input id='newTime' value={this.state.minute} type='number' onChange={this.mChange}/>
                    <h1>분</h1>
                    <input id='loreAdd' value={this.state.lore} type='text' onChange={this.lChange}/>
                    <button onClick={this.handleCreate}>등록</button>
                </div>
            </div>
        )
    }
}
export default Clock;