import React from "react";
import { Checkbox } from "semantic-ui-react";

const MultiCheckbox = ({ input, meta, renderError }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const { name, onChange } = input;
  const { touched, error } = meta;
  const inputValue = input.value;

  const checkboxes = days.map((day, id) => {
    const handleChange = (event, data) => {
      const arr = [...inputValue];
      if (data.checked) {
        arr.push(day);
      } else {
        arr.splice(arr.indexOf(day), 1);
      }
      return onChange(arr);
    };
    const checked = inputValue.includes(day);

    return (
      <Checkbox
        onChange={(e, data) => handleChange(e, data)} //needed for custom components
        key={day}
        label={day}
        checked={checked}
        type="checkbox"
      />
    );
  });
  return (
    <div className="field">
      <label className="ui left aligned header">{}</label>
      {checkboxes}
    </div>
  );
};

export default MultiCheckbox;
