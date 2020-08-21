import React from 'react';
import {connect} from 'react-redux';
import Router, { withRouter } from "next/router";
import MainMenu from '../MainMenu';



class Container extends React.PureComponent {
    constructor(props) {
        super(props);
        this.router = this.props.router;

    }
    componentDidMount() {

        if (this.router.route === "/") {
            this.router.push("/mainMenu")
        }
        else {
            //error
        }
    }
    render() {
        return(
            <h1>loading</h1>
        );
    }
    // goToPath = (path) => {
    //     this.router.push("/" + path);
    // };

}
export default withRouter(Container);


