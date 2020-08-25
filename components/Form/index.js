import React from 'react';
import { withRouter } from 'next/router';
import '../../styles/form-elements.less';
import './styles.less';
import FormInput from '../FormInput';

const Form = (props) => {

    const transformedInputs = Object.keys(props.inputs).map(inputKey => {
        return [...Array(props.inputs[inputKey])].map(_, i) => {
            <FormInput key={inputKey + i} type={inputKey} />
        });
    }

    render() {
        return(
            <div>

            </div>
        );
    }

}

export default withRouter(Form);