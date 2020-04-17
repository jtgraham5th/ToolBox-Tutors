import React from "react";

const Input = ({ input, label, meta, renderError }) => {
    const className = `field required ${
      meta.error && meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label className="ui left aligned header">{label}</label>
        <input {...input} autoComplete="off" type={input.name} />
        {/* {renderError(meta)} */}
      </div>
    );
  };

export default Input;
