import React from "react";
import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import GetStarted from "../views/getStarted";
import PreGetStarted from "../views/preGetStarted";

export default () => (
  <Layout>
    <PreGetStarted />
  </Layout>
);

