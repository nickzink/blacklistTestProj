import React from 'react';
import { withRouter } from 'next/router';
import {Form} from 'antd';
import '../../styles/form-elements.less';
import './styles.less';
import FormInput from '../../components/FormInput';
import MultiSelect from '../../components/MultiSelect';

class getStarted extends React.Component {
    constructor(props) {
        super(props);
        this.degreeOptionsList = ["Bachelors degree", "Master's degree", "PhD"]
        this.stateOptionsList = ['Any','Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

    }

    // inputChangedHandler = e => {
    //     const { form } = this.props;
    //     const { name } = e.target;
    //     console.log(form + name);
    // }


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
                                    placeholder={'Choose a degree'}
                                    options={this.degreeOptionsList}
                                    // onChange={this.inputChangedHandler} 
                                    />
                            
                            <FormInput label="Which states do you want to study in?" 
                                inputtype='multiselect'
                                placeholder={'Choose states'}
                                options={this.stateOptionsList}
                                />

                            <FormInput label="What is your annual college budget:"
                                    inputtype='slider'
                                    min={0}
                                    max={75000}
                                    step={5000}
                                    labelClass={'getStartedLabel'}
                                    tooltipVisible={true} 
                                    formatterCurrency={true} />

                            <FormInput label="What size college are you looking for?"
                                    inputtype='slider'
                                    min={0}
                                    max={100000}
                                    step={1000}
                                    labelClass={'getStartedLabel'}
                                    tooltipVisible={true} 
                                    range={true} />

                        </Form>
                    </div>
                </div>

            </div>
        );
    }



}

export default withRouter(getStarted)