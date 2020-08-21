import React from "react";
import Container from "../components/Container";
import {connect} from 'react-redux';
import Router, { withRouter } from "next/router";


export default class container extends React.Component {
    render() {
      return (
        <Container />
      );
    }
}