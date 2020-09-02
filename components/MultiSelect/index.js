import React from 'react';
import Select from 'react-select';


class MultiSelectionList extends React.Component {

  constructor(props) {
      super(props)
      this.optionsList = []
  } 

  inputChangedHandler = e => {
    e.forEach(function showElements(item) {
        console.log(item)
      }
    );
  }

  componentDidMount() {
    this.sel.addEventListener("onChange", this.inputChangedHandler);
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
                    isMulti
                    placeholder={this.placeholder}
                    isDisabled={this.disabled}
                    onChange={this.inputChangedHandler}
                    options={this.optionsList}

                    />       
            </div>
        )
    }
}

export default MultiSelectionList;