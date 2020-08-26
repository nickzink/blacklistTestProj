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

class TestComponents extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    };

    goToHome = () => {
        this.props.router.push("/mainPage");
    };


    render() {
      return(
        <div id='testPageWrapper'>
            
        
            <div className={"testcomponent"} id='tc-button-container'>
                <Button>Click me</Button>
            </div>

            <div className={"testcomponent"} id='tc-slider-container'>
                <Slider
                    min={0}
                    max={75000}
                    step={5000}
                    label={"What's your college budget?"} />
            </div>
            <div className={"testcomponent"} id='tc-dropdown-container'>
                <Select
                    placeholder="Gender"
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </div>

            <div className={"tc-forminput-container testcomponent"}> 
                <FormInput 
                    inputtype={"slider"}
                    min={0}
                    max={75000}
                    step={5000}
                    label={"What's your college budget?"} />
            </div>

                

            

        </div>
      );
    }
}

export default withRouter(TestComponents);
  
