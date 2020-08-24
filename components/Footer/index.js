import React from 'react';
import './styles.less'
import Logo from '../Logo';
import Button from '../Button';
import { withRouter } from "next/router";
import './styles.less';

class foot extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    goToMainPage = () => {
        this.props.router.push("/mainPage");
    };
    
    goToPath = (path) => {
        this.props.router.push("/" + path);
    }

    render() {
        return (
            <div id='mainPageFooter'>

                <div className='footerSection' id='sectionOne'>

                    <div className='footerCol'>
                        placeholer
                    </div>

                    <div className='footerCol'>
                        placeholer
                    </div>

                    <div className='footerCol'>
                        placeholer
                    </div>

                    <div className='footerCol'>
                        <div className='footerColTitle'>Contact</div>
                        <div className='footerColInfo'>Phone: XXX-XXX-XXXX</div>
                        <div className='footerColInfo'>Email: nick@myEmail.com</div>
                        <div className='footerColInfo'>Adress: 100 Berlinstr. 101010</div>
                    </div>
                </div>
                {/* <nav id='navLinks'>


                    
                </nav> */}

                
                <hr className='footerDivider'></hr>
                {/* Sub footer at very bottom possible for copyright/T&C/T&S/Privacy policy */}
                <div className ='footerSection' id='sectionTwo'>
                    <div className='footerColInfo' id='socialMediaLinks'>
                        Social media links here
                    </div>                                

                    <div  id='formalities'>
                            T&C etc here
                    </div>
                    <div className='footerColInfo' id='logoContainer'>
                            <Logo onClick={this.goToMainPage}/>
                    </div>
                </div>
            </div>
        );
    }



}
export default withRouter(foot);