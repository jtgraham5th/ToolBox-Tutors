import React from "react";
import { Dropdown } from "semantic-ui-react";

const MultiSelect = ({ input, label, meta, options, renderError }) => {
  const className = `field required ${
    meta.error && meta.touched ? "error" : ""
  }`;
  const multiple = input.name === "subjects" ? true : false;
  console.log(input);
  return (
    <div className={className}>
      <label className="ui left aligned header">{label}</label>
      <Dropdown
        multiple={multiple}
        {...input}
        selection
        value={input.value}
        onChange={(param, data) =>
          input.onChange(data.value, console.log(input))
        }
        placeholder="Select"
        options={options}
      />
      {renderError(meta)}
    </div>
  );
};

export default MultiSelect;
