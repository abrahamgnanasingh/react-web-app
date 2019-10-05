import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    let { label, name, checked, onChange } = props;

    return (
        <label className={"checkcontainer " + (label ? "mb-0" : "")}>
            {label}
            <input type="checkbox" name={name} checked={checked} onChange={onChange && onChange} />
            <span className="checkmark"></span>
        </label>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired
};

export default Checkbox;