// import placeHolder from '../../public/static/img/logo.png';
import './styles.less';
 
 const logo = (props) => (
   
    <div id='logoContainer'>
        <div id='logo'>
            <img
            // src='../../public/static/img/logo.png'
            alt="logo"
            onClick={props.onClick}>
            </img>
        </div>
    </div>
  );
  export default logo;