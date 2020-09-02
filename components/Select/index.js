import React from 'react';
import Select from 'react-select';
import {setDegree} from '../../redux/actions/userActions';
import { compose } from "redux";
import { withRouter } from "next/router";
import {connect} from 'react-redux';


class SelectionList extends React.Component {

    constructor(props) {
        super(props)
        this.optionsList = []
        const {userInfo} = this.state.userInfo;
    } 

    inputChangedHandler = e => {
        setDegree(e.value);
        console.log(userInfo.degree.value);

    }

    componentDidMount() {
        this.sel.addEventListener("onChange", this.inputChangedHandler);
        this.props.set
    }

    render() {
        var optionsListTemp = [];
        this.props.options.forEach(function(element) {
            optionsListTemp.push({ label:element, value: element })
        });
        this.optionsList = optionsListTemp;

        return (
            <div ref={elem => this.sel = elem}>
                <Select
                    placeholder={this.props.placeholder}
                    isDisabled={this.props.disabled}
                    onChange={this.inputChangedHandler}
                    options={this.optionsList}
                    />
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // degree: state.userInfo.degree.value,
});

const mapDispatchToProps = {
    setDegree: setDegree
};

export default compose(
    withRouter,
    connect(
      mapStateToProps,
      mapDispatchToProps
    )
  )(SelectionList);