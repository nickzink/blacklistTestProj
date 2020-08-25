import React from 'react';
import './styles.less'
import Logo from '../Logo';
import Button from '../Button';
import { withRouter } from "next/router";

class navBar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    goToMainPage = () => {
        this.props.router.push("/mainPage");
    };

    goToCounter = () => {
        this.props.router.push("/counter");
    }

    goToTestComponents = () => {
        this.props.router.push("/testComponents");
    }
    goToGetStarted = () => {
        this.props.router.push("/preGetStarted");
    }
    
    goToPath = (path) => {
        this.props.router.push("/" + path);
    }

    render() {
        return (
            <div id='navbar'>
                <div id='navBarLayout'>
                    <div id='logoContainer'>
                        <Logo onClick={this.goToMainPage}/>
                    </div>
                    <nav id='navLinks'>

                        <button
                        onClick={this.goToGetStarted} 
                        className={'navBarButton getStartedButton'}>
                        Get Started
                        </button>

                        {/* <button
                        onClick={this.goToMainPage} 
                        className={'navBarButton'}>
                        Login
                        </button> */}

                        {/* <button
                        onClick={this.goToMainPage} 
                        className={'navBarButton'}>
                        About Us
                        </button> */}

                        <button
                        onClick={this.goToTestComponents} 
                        className={'navBarButton'}>
                        Test Components
                        </button>

                        <button
                        onClick={this.goToCounter} 
                        className={'navBarButton'}>
                            Counter
                        </button>

                        
                    </nav>
                </div>
                {/* <div className='divider'></div> */}
            </div>
        );
    }



}
export default withRouter(navBar);