import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    let { label, name, checked, onChange, isPartialSelect } = props;

    return (
        <label className={"checkcontainer " + (label ? "mb-0" : "")}>
            {isPartialSelect ?
                <div onClick={e => onChange && onChange(e)}>
                    <i className="fa fa-minus-square-o fs-18" aria-hidden="false"></i>
                    {label ? <span className="ml-2">{label}</span> : ""}
                </div>
            :
            <>
                {/* <span>{label}</span> */}
                <input type="checkbox" name={name} checked={checked} onChange={e => onChange && onChange(e)} />
                {/* <span className="checkmark"></span> */}
                <i className={"fa " + (checked ? "fa-check-square" : (isPartialSelect ? "fa-minus-square-o" : "fa-square-o")) + " checkmark fs-18"} aria-hidden="false"></i>
                {label ? <span className="ml-2">{label}</span> : ""}
            </>
            }
        </label>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired
};

export default Checkbox;