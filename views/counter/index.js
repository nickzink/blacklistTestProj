import React from 'react';
import {connect} from 'react-redux';
import { compose } from "redux";
import {decrementCounter, incrementCounter} from '../../redux/actions/counterActions';
import Button from '../../components/Button';
import { withRouter } from "next/router";



class CounterView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    goToMainPage = () => {
        this.props.router.push("/mainPage");
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
                     text={'Decrement'}>
                </Button>

                <h1 className="countNumber">{this.props.counter}</h1>

                <Button
                     onClick={this.goToMainPage} 
                     className={'counterButton'}
                     text={"Back to menu"}>
                </Button>
            </div>
        );
    }
                

    
 
}

const mapStateToProps = state => ({
    counter: state.counter.value,
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
  )(CounterView);


