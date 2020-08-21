import React from "react";
import MainMenu from "../components/MainMenu";
import { withRouter } from 'next/router';


class menu extends React.Component {
  render() {
    return <MainMenu />;
  }
}
export default withRouter(menu);

