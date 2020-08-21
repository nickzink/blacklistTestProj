import React from 'react';
import {connect} from 'react-redux';
import { compose } from "redux";
import {decrementCounter, incrementCounter} from '../../redux/actions/counterActions';
import Button from '../../components/Button';
import counterButton from '../../components/Button';
import { withRouter } from "next/router";



class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    goToMainMenu = () => {
        this.props.router.push("/mainMenu");
    };

    render() {
        return (
            <div>
                <Button
                     onClick={this.props.incrementCounter} 
                     className={'counterButton'}
                     text={"Increment"}>
                </Button>
                <Button
                     onClick={this.props.decrementCounter} 
                     className={'counterButton'}
                     text={"Decrement"}>
                         
                </Button>

                <h1>{this.props.counter}</h1>

                <Button
                     onClick={this.goToMainMenu} 
                     className={'counterButton'}
                     text={"Back to menu"}>
                </Button>
            </div>
        );
    }
                

    
 
}

const mapStateToProps = state => ({
    counter: state.counter.value,
    user: state.currentUser
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};


export default compose(
    withRouter,
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(Counter);


