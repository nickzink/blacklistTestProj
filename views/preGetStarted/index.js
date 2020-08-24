import React from 'react';
import { withRouter } from 'next/router';
import './styles.less';
import WaveDivider from '../../components/WaveDivider'
import '../../styles/button-styles.less';

class preGetStarted extends React.Component {
    constructor(props) {
        super(props);
    }

     
    getStarted = (option) => {
        this.props.router.push("/getStarted");
    }

    render() {
        return(
            <div className='pageWrapper'>
                <div className='pageHeader'>
                    <div className='mainHead'>Before we get started</div>
                    {/* <div className='subHead'>Not sure?<br />Do some exploring and find the right fit for your situation!</div> */}
                </div>
                <WaveDivider />
                <div className='pageMain'>
                    <div className='getStartedCol' id='col1'>
                        <button
                            onClick={this.getStarted(1)} 
                            className={'navBarButton getStartedPageButton'}>
                            I already know which <br />
                            college I want to attend
                        </button>
                        {/* <div className='chooseStart'>
                            I already know which <br />
                            college I want to attend
                        </div> */}
                    </div>
                    <div className='getStartedCol' id='col2'>
                        <button
                            onClick={this.getStarted(2)} 
                            className={'navBarButton getStartedPageButton'}>
                            I am still considering<br />
                            my options
                        </button>
                        {/* <div className='chooseStart'>
                            I am still considering<br />
                            my options
                        </div> */}
                    </div>  
                </div>

            </div>
        );
    }

}

export default withRouter(preGetStarted)