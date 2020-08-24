import React from "react";
import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import MainPage from "../views/mainPage";

export default () => (
  <Layout>
    <MainPage />
  </Layout>
);

