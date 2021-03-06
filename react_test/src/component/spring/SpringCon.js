import React, {useState, useEffect} from "react";
import customAxios from "./component/customAxios";

function SpringCon() {
    const [ip, setIp] = useState('Spring 서버와 연결 중 오류 발생');

    function callback(data) {
        setIp(data);
    }

    useEffect(
        () => {
            customAxios('/test', callback);
        }, []
    );
    return (
        <div id='comp'>
            <h2>{ip}</h2>
        </div>
    );
}

export default SpringCon;