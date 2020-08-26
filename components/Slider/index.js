import React from "react";
import { Slider } from "antd";
import "./styles.less";


function formatter(value) {
    return `$${value}`;
}

const slider = ({
    min = 0,
    max = 100,
    tooltipFormatType = "",
    step=1,
    onChange,
    tooltipVisible = false
    // label="",
    // labelStyleClassName=""
}) => {
    return (
        <div>
            {/* <div className={labelStyleClassName}>{label}</div> */}
            <Slider 
                tipFormatter={formatter}
                min={min}
                max={max}
                tooltipFormatType={tooltipFormatType}
                step={step}
                onChange={onChange}
                tooltipVisible={tooltipVisible}
            ></Slider>
        </div>
    );
};
  export default slider;