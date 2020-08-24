import React from "react";
import Container from "../components/Container";
import {connect} from 'react-redux';
import Router, { withRouter } from "next/router";
// import 'antd/dist/antd.css';



export default class container extends React.Component {
    render() {
      return (
        <div id="appWrapper">
          <Container />
        </div>
      );
    }
}