import React from 'react';
import './styles.less'
import Logo from '../Logo';
import Button from '../Button';
import { withRouter } from "next/router";

class NavBar extends React.Component {

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
        console.log("huh");
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

                        <Button
                        clicked={this.goToTestComponents} 
                        className={'navBarButton navBarButtonDisapear'}>
                        Test Components
                        </Button>

                        <Button
                        clicked={this.goToCounter} 
                        className={'navBarButton navBarButtonDisapear'}>
                            Counter
                        </Button>
                    </nav>
                    <nav id='getStartedButton'>
                        <Button
                            clicked={this.goToGetStarted} 
                            className={'navBarButton getStartedButton'}>
                            Get Started
                        </Button>
                    </nav>
                </div>
                {/* <div className='divider'></div> */}
            </div>
        );
    }



}
export default withRouter(NavBar);