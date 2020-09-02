import React from "react";
import { Slider } from "antd";
import "./styles.less";


const slider = ({
    min = 0,
    max = 100,
    tooltipFormatType = "",
    step=1,
    onChange,
    tooltipVisible = false,
    range = false,
    formatterCurrency = false
    // label="",
    // labelStyleClassName=""
}) => {

    function formatterDollar(value) {
        if (value == max)
            return `$${value}+`;
        return `$${value}`;
    }
    function formatter(value) {
        if (value == max) 
            return `${value}+`;
        return `${value}`;
    }

    return (
        <div>
            {/* <div className={labelStyleClassName}>{label}</div> */}
            <Slider 
                tipFormatter={formatterCurrency ? formatterDollar : formatter}
                min={min}
                max={max}
                tooltipFormatType={tooltipFormatType}
                step={step}
                onChange={onChange}
                tooltipVisible={tooltipVisible}
                range={range}
            ></Slider>
        </div>
    );
};
  export default slider;