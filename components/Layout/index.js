import React from 'react';
import {connect} from 'react-redux';
import Router, { withRouter } from "next/router";
import Head from "next/head";
import MainPage from '../../views/mainPage';
import NavBar from '../NavBar';
import Footer from '../Footer'
import Texts from "../../resources/texts.json";
import './styles.less';




class Layout extends React.PureComponent {
    constructor(props) {
        super(props);
        this.router = this.props.router;

    }
    componentDidMount() {

    }
    render() {
        const { children, title = Texts.appTitle } = this.props
        return (
            <div className="container">
              <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
              </Head>
                <header>
                    <NavBar />
                </header>

                <div className="pageContent">{children}</div>

                <footer>
                  <Footer />
                </footer>
            </div>
          );
    }
    // goToPath = (path) => {
    //     this.router.push("/" + path);
    // };

}
export default withRouter(Layout);


