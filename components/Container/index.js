import React from 'react';
import {connect} from 'react-redux';
import Router, { withRouter } from "next/router";



class Container extends React.PureComponent {
    constructor(props) {
        super(props);
        this.router = this.props.router;

    }
    componentDidMount() {

        if (this.router.route === "/") {
            this.router.push("/mainPage")
        }
        else {
            //error
        }
    }
    render() {
        return (
            <div className="loadingScreen">
              <h1>Loading</h1>
            </div>
          );
    }
    // goToPath = (path) => {
    //     this.router.push("/" + path);
    // };

}
export default withRouter(Container);


