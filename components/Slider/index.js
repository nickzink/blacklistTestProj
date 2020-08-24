import React from "react";
import { Slider } from "antd";
import "./styles.less";


function formatter(value, tooltipFormatType) {
    return `${value}%`;
}

const slider = () => {
    return (
        <Slider tipFormatter={null}></Slider>
    );
};
  export default slider;