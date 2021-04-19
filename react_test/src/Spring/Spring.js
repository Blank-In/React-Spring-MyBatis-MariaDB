import React,{useState,useEffect} from "react";
import customAxios from "./customAxios";

function Spring(){
    const [ip,setIp]=useState('');
    function callback(data){
        setIp(data);
    }
    useEffect(
        ()=>{
            customAxios('/test',callback);
        },[]
    );
    return(
        <div id='comp'>
            <h1>{ip}</h1>
        </div>
    );
}
export default Spring;