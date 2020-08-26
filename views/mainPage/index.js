import React from "react";
import { connect } from "react-redux";
import Button from '../../components/Button';
import { withRouter } from 'next/router';
import './styles.less';
import Slider from '../../components/Slider';


class MainPage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
      return(
        <div id='mainPageWrapper'>
            <div>
                <div id='welcome'>Welcome to Blacklist</div>
                
            </div>
        </div>
      );
    }
}

export default MainPage;
  
