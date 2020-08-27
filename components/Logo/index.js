// import placeHolder from '../../public/static/img/logo.png';
// const logo = require('../../public/static/img/logo.png')
import './styles.less';
import React from 'react';
import { withRouter } from "next/router";


class Logo extends React.Component {

    constructor(props) {
        super(props);
    }

    goToMainPage = () => {
        this.props.router.push('/mainPage')
    }
    render() {
        return (
            <div id='logoPlaceHolder' onClick={this.goToMainPage}>
                <img className='logo' src={'https://f0.pngfuel.com/png/984/314/triangular-black-illustration-png-clip-art-thumbnail.png'} />
            </div>
        );
    }
}

  export default withRouter(Logo);