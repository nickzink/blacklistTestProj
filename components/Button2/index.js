import React from "react";
import { Button } from 'antd';

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