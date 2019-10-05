import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    let { label, name } = props;

    return (
        <label className={"checkcontainer " + (label ? "mb-0" : "")}>
            {label}
            <input type="checkbox" name={name} />
            <span className="checkmark"></span>
        </label>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired
};

export default Checkbox;