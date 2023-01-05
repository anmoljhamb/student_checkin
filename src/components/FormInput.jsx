import React, { useState } from "react";

const FormInput = (props) => {
    const { label, onChange, errorMessage, ...inputProps } = props;
    const [focused, setFocused] = useState(false);

    return (
        <div className="formInput">
            <label htmlFor="">{label}</label>
            <input
                onChange={onChange}
                placeholder={props.placeholder}
                {...inputProps}
                onBlur={() => {
                    setFocused(true);
                }}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;
