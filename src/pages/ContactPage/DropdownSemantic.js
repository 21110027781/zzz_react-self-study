import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
    {value: "Food", text: "Food" },
    {value: "Being_Fabulous", text: "Being Fabulous" },
    {value: "Ken_Wheeler", text: "Ken Wheeler" },
    {value: "ReasonML", text: "ReasonML" },
    {value: "Unicorns", text: "Unicorns" },
    {value: "Kittens", text: "Kittens" }
];

class DropdownSemantic extends Component {
    // handleChange = value => {
    //     console.log(value)
    //     // this is going to call setFieldValue and manually update values.topcis
    //     this.props.onChange("topicsSemantic");
    // };
    handleChange = (e, { value }) => {
        this.props.onChange("topicsSemantic", value);
    }

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        // set "touched": { "topicsSemantic": true }
        this.props.onBlur("topicsSemantic", true);
    };
    render() {
        return (
            <Dropdown
                placeholder='State'
                fluid
                selection
                multiple
                search
                disabled={false}
                options={options}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                value={this.props.value}
            />
        );
    }
}

export default DropdownSemantic;