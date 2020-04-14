import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

class StudentLogin extends React.Component {
  onSubmit = (formProps) => {
    console.log(this.props.signUp(formProps));
  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    console.log(input)
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  render() {
    const {handleSubmit} = this.props
    return (
      <div className="ui container">
        <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="email" component={this.renderInput} label="Email" />
          <Field
            name="password"
            component={this.renderInput}
            label="password"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.title = "You must enter an email";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }
  return errors;
};
export default compose(
  connect(null, actions),
  reduxForm({
    form: "StudentSignUp",
    validate
  })
)(StudentLogin);
