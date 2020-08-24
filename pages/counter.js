import React from "react";
import Counter from "../views/Counter";
import Layout from "../components/Layout";

export default class counter extends React.Component {
  render() {
    return (
      <Layout>
        <Counter />
      </Layout>
    );
  }
}