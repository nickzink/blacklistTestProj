import React from "react";
import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import TestComponents from "../views/testComponents";

export default () => (
  <Layout>
    <TestComponents />
  </Layout>
);

