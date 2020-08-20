import React from "react";
import Router, { withRouter } from "next/router";

class Container extends React.PureComponent {
    
    componentDidMount() {
        const { route } = this.props.router;

        if (route === "/") {
            Router.push("/MainMenu");
        }
    }

}
export default compose(withRouter)(Container);
