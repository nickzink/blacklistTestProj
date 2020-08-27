import App from 'next/app'
import React from 'react';
import {wrapper} from '../redux/store';
import Router from "next/router";
import '../styles/blacklist-theme.less';
import '../styles/button-styles.less';
import '../styles/globals.css';
// import 'antd/dist/antd.css';




class MyApp extends App {

    static getInitialProps = async ({Component, ctx}) => {

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
                // Some custom thing for all pages
                pathname: ctx.pathname,
            },
        };

    };

    render() {
        const {Component, pageProps} = this.props;
        return (
            <Component {...pageProps} />
        );
    }
}

export default wrapper.withRedux(MyApp);





 
// class MyApp extends App {

//     static async getInitialProps({ Component, ctx }) {
//         const { getInitialProps } = Component;
//         return {
//             pageProps: {
//             // Call page-level getInitialProps
//             ...(getInitialProps ? await getInitialProps(ctx) : {})
//             }
//         };
//     }

//     render() {
//         console.log(1);
//         const { Component, pageProps } = this.props;
//         console.log(wrapper);

//         return(
//             // <Provider store={wrapper.store}>  
//             <Component {...pageProps} />
//             // </Provider>
//         );    

//     };
// }
// const makeStore = () => store;
// const wrapper = createWrapper(makeStore, {debug: true});
// console.log(wrapper);


// export default wrapper.withRedux(MyApp);
