import React, {Component} from 'react';
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';
import Router, { withRouter } from "next/router";
import Button from '../components/Button'
import LogRocket from "logrocket";


class Index extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.incrementCounter}>Increment</button>
                <button onClick={this.props.decrementCounter}>Decrement</button>
                <h1>{this.props.counter}</h1>
                {/* <Button onClick={this.login}>
                    Login
                </Button> */}
            </div>
        );
    }

    // login = () => {
    //     Router.push("/login");
    // };
 
}

const mapStateToProps = state => ({
    counter: state.counter.value,
    user: state.currentUser
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};


export default connect(mapStateToProps, mapDispatchToProps)(Index);


// export default App;


// const app = (
//     <MyApp></MyApp>
// );
// export default withRedux(app);


// const app = (
//     // render() {
//     //     return (
//     //         <div>
//     //             <button onClick={this.props.incrementCounter}>Increment</button>
//     //             <button onClick={this.props.decrementCounter}>Decrement</button>
//     //             <h1>{this.props.counter}</h1>
//     //         </div>
//     //     );
//     // }
//     <Provider store={store}>
//         <MyApp />
//     </Provider>
// );

// ReactDOM.render( app, document.getElementById( 'root' ) );
// registerServiceWorker();





