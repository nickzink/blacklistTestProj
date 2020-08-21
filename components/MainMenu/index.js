import React from "react";
import { connect } from "react-redux";
import Button from '../Button';
import { withRouter } from 'next/router';


class MainMenu extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    goToCounter = () => {
        this.props.router.push("/counter");
    };

    render() {
      return(
        <div id='wrapper'>
            <div>
                <h1>Welcome to Blacklist</h1>
                <Button onClick={this.goToCounter} className={'counterButton'} router={this.props.router} text="Go to Counter!" />
            </div>
        </div>
      );
    }


}

export default withRouter(MainMenu);
  

