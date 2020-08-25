import React from "react";
import { connect } from "react-redux";
import Button from '../../components/Button';
import { withRouter } from 'next/router';
import './styles.less';
import Slider from '../../components/Slider';
import FormInput from '../../components/FormInput'
import { Select } from "antd";
// import 'antd/dist/antd.css';
const Option = Select.Option;

class testComponents extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    goToHome = () => {
        this.props.router.push("/mainPage");
    };


    render() {
      return(
        <div id='testPageWrapper'>
            
        
            <div id='button'>
                <Button text='antd button'></Button>
            </div>

            <div id='slider'>
                <Slider
                    min={0}
                    max={1000} />
            </div>
            <div id='dropDown'>
                <Select
                    placeholder="Gender"
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </div>

            <div id="testFormInput"> 
                <FormInput inputType="slider"/>
            </div>

                

            

        </div>
      );
    }
}

export default withRouter(testComponents);
  
