import React from "react";
import { Button } from 'antd';


class counterButton extends React.Component {
    render() {
        return (
            <div>
                <Button
                     onClick={this.props.onClick} 
                     className={this.props.className}>
                         {this.props.text}
                </Button>
            </div>
        );
    }
}
export default counterButton;

