// import placeHolder from '../../public/static/img/logo.png';
import './styles.less';
import { withRouter } from "next/router";


const placeHolder = () => {

    return (
        <div id='logoPlaceHolder'>Logo</div>
    );
}

  export default withRouter(placeHolder);