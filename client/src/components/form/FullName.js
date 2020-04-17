import React from "react";

const Fields = fields => {
  // const className = `field required ${
  //   meta.error && meta.touched ? "error" : ""
  // }`;
  console.log(fields)
  return (
    <div className="field">
      <label className="ui left aligned header">{fields.label}</label>
      <div className="two fields">
        <div className="field">
          <input
            {...fields.firstName.input}
            autoComplete="off"
            type="text"
            placeholder="First Name"
          />
        </div>
        {fields.renderError(fields.firstName.meta)}
        <div className="field">
          <input
            {...fields.lastName.input}
            autoComplete="off"
            type="text"
            placeholder="Last Name"
          />
        </div>
        {fields.renderError(fields.lastName.meta)}
      </div>
    </div>
  );
};

export default Fields;
