const { Input } = require("antd");
import Slider from '../../components/Slider';
import './styles.less'
import Select from '../../components/Select';
import PropTypes from 'prop-types';
import MultiSelectionList from '../MultiSelect';


const FormInput = (props) => {

    let inputElem = null;
    // console.log(props);
    switch(props.inputtype) {
        case ('input'):
            inputElem = <Input className='formInputField' {...props}/>
            break;
        case ('select'):
            inputElem = <Select className='formInputSelect' {...props}/>
            break;
        case ('slider'):
            inputElem = <Slider className='formInputSlider' {...props}/>
            break;
        case ('multiselect'):
            inputElem = <MultiSelectionList className='formInputMultiSelect' {...props}/>
            break;
        case ('typeAhead'):
            // inputElem = < {...props}/> 
    }


    return(
        <div className={'inputItem'}>
            <label className='inputItemLabel'>
                {props.label}
            </label>
            {inputElem}
        </div>
    );

}

FormInput.propTypes = {
    inputtype: PropTypes.string.isRequired
}

export default FormInput;

