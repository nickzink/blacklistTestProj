const { render } = require("less");
const { Dropdown, Select, Slider, Input } = require("antd");
import './styles.less'
import PropTypes from 'prop-types';


const FormInput = (props) => {

    this.state = {}

    let inputElem;
    console.log(props);
    switch(props.inputType) {
        case ('input'):
            inputElem = <Input className='inputElem' {...props}/>
        case ('select'):
            inputElem = <Select className='inputElem' {...props}/>
        case ('slider'):
            inputElem = <Slider className='inputElem' {...props}/> 
        case ('typeAhead'):
            // inputElem = < {...props}/> 
        default:
            inputElem = <Input className='inputElem' {...props}/>
    }


    return(
        <div className={'inputItem'}>
            <label>
                {props.label}
            </label>
            {inputElem}
        </div>
    );

}

FormInput.propTypes = {
    type: PropTypes.string.isRequired
}

export default FormInput;

