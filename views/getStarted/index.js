import React from 'react';
import { withRouter } from 'next/router';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';
import '../../styles/form-elements.less';
import './styles.less';

class getStarted extends React.Component {
    constructor(props) {
        super(props);
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
                          wrapperCol={{
                            span: 10,
                          }}
                          layout="vertical"
                          >
                            <Form.Item label="What type of degree are you trying to achieve" className='formItem'>
                            <Select>
                                <Select.Option value="Bachelor's Degree">Bachelor's Degree</Select.Option>
                                <Select.Option value="Master's Degree">Master's Degree</Select.Option>
                                <Select.Option value="PhD">PhD</Select.Option>

                            </Select>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }



}

export default withRouter(getStarted)