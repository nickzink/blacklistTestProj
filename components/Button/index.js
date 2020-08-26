import React from "react";
import { Button } from 'antd';



const button = (props) => {
    return (
        <button
                onClick={props.clicked} 
                className={props.className}>
                    {props.children}
        </button>
    );
}

export default button;