import React from "react";

const TextArea = ({ input, label }) => {
  return (
    <div className="field">
      <label className="ui left aligned header">{label}</label>
      <textarea {...input}></textarea>
    </div>
  );
};

export default TextArea;
