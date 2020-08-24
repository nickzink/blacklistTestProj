import React from "react";
import { connect } from "react-redux";
import Button from '../../components/Button';
import { withRouter } from 'next/router';
import './styles.less';
import Slider from '../../components/Slider';
import { Select } from "antd";
// import 'antd/dist/antd.css';


class testComponents extends React.Component {
    
    constructor(props) {
        super(props);
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
                {/* <Select
                    placeholder="Gender"
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select> */}
            </div>

                

            

        </div>
      );
    }
}

export default withRouter(testComponents);
  
