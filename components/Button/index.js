import React from "react";
// import './styles.less';

const Button = ({
    onClick,
    text
}) => {
    return (
        <Button 
            onClick={onClick} 
            className="Button">
                {text}
        </Button>
    );
    
}

export default Button;