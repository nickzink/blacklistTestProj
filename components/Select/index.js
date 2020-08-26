import React from 'react';
import Select from 'react-select';


const SelectionList = ({
    placeholder = "",
    disabled = false,
    onChange,
    options = []
}) => {
    var optionsList = [];
    options.forEach(function(element) {
        optionsList.push({ label:element, value: element })
    });
    
    return (
        <div>
            <Select
                placeholder={placeholder}
                isDisabled={disabled}
                onChange={onChange}
                options={optionsList}
                 />
            
        </div>
            

    )
}

export default SelectionList;