import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    let { label, name, checked, onChange, isPartialSelect } = props;

    let isChecked = isPartialSelect || checked;

    return (
        <label className={"checkcontainer " + (label ? "mb-0" : "")}>
            <input type="checkbox" name={name} checked={isChecked} onChange={e => onChange && onChange(e)} />
            <i className={"fa " + (checked ? "fa-check-square" : (isPartialSelect ? "fa-minus-square-o" : "fa-square-o")) + " checkmark fs-18"} aria-hidden="false"></i>
            {label ? <span className="ml-2">{label}</span> : ""}
        </label>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired
};

export default Checkbox;