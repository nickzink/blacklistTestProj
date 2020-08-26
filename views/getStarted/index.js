import React from 'react';
import { withRouter } from 'next/router';
import {Form} from 'antd';
import '../../styles/form-elements.less';
import './styles.less';
import FormInput from '../../components/FormInput';

class getStarted extends React.Component {
    constructor(props) {
        super(props);
        this.optionsList = ["Bachelors degree", "Master's degree", "PhD"]
    }


    render() {
        return(
            <div className='getStartedPageWrapper'>
                <div className='getStartedPageHeader'>
                    <div className='getStartedMainHead'>What is your plan for college?</div>
                    <div className='getStartedSubHead'>Not sure?<br />Do some exploring and find the right fit for your situation!</div>
                </div>
                <div className='getStartedPageMain'>
                    <div className='getStartedFormWrapper'>
                        <Form
                        className="getStartedForm"
                        // labelCol={{
                        //     span: ,
                        //   }}
                        //   wrapperCol={{
                        //     span: ,
                        //   }}
                          layout="vertical"
                          >
                            <FormInput label="Which type of degree are you trying to achieve:"
                                    inputtype='select'
                                    placeholder={'Choose an option'}
                                    options={this.optionsList} 
                                    />
                            <FormInput label="What is your annual college budget:"
                                    inputtype='slider'
                                    min={0}
                                    max={75000}
                                    step={5000}
                                    labelClass={'getStartedLabel'}
                                    tooltipVisible={true} />
                        </Form>
                    </div>
                </div>

            </div>
        );
    }



}

export default withRouter(getStarted)