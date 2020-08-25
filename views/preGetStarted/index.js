import React from 'react';
import { withRouter } from 'next/router';
import './styles.less';
import WaveDivider from '../../components/WaveDivider'
import '../../styles/button-styles.less';

class preGetStarted extends React.Component {
    constructor(props) {
        super(props);
    }

     
    getStarted = () => {
        this.props.router.push("/getStarted");
    }

    render() {
        return(
            <div className='preGetStartedPageWrapper'>
                <div className='preGetStartedPageHeader'>
                    <div className='preGetStartedMainHead'>One thing before we get started</div>
                    {/* <div className='subHead'>Not sure?<br />Do some exploring and find the right fit for your situation!</div> */}
                </div>
                <WaveDivider />
                <div className='preGetStartedPageMain'>
                    <div className='preGetStartedCol' id='col1'>
                        <button
                            onClick={this.getStarted} 
                            className={'navBarButton getStartedPageButton'}>
                            I already know which <br />
                            college I want to attend
                        </button>
                        {/* <div className='chooseStart'>
                            I already know which <br />
                            college I want to attend
                        </div> */}
                    </div>
                    <div className='preGetStartedCol' id='col2'>
                        <button
                            onClick={this.getStarted} 
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