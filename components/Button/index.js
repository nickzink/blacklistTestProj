import React from "react";
import { Button } from 'antd';
import "../../styles/button-styles.less";



const button = ({onClick, className, text}) => {
    return (
        <Button
                onClick={onClick} 
                className={className}>
                    {text}
        </Button>
    );
}

export default button;