// import placeHolder from '../../public/static/img/logo.png';
// const logo = require('../../public/static/img/logo.png')
import './styles.less';
import { withRouter } from "next/router";


const placeHolder = () => {

    return (
        <div id='logoPlaceHolder'>
            {/* <img src={logo} /> */}
        </div>
    );
}

  export default withRouter(placeHolder);