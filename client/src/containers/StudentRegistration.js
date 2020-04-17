import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";

class StudentRegistration extends React.Component {
  onSubmit = formProps => {
    console.log(this.props.signUp(formProps));
  };
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderFields = fields => {
    console.log(fields);
    // const className = `field required ${
    //   meta.error && meta.touched ? "error" : ""
    // }`;
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
          {this.renderError(fields.firstName.meta)}
          <div className="field">
            <input
              {...fields.lastName.input}
              autoComplete="off"
              type="text"
              placeholder="Last Name"
            />
          </div>
          {this.renderError(fields.lastName.meta)}
        </div>
      </div>
    );
  };
  renderInput = ({ input, label, meta }) => {
    console.log(input);
    const className = `field required ${
      meta.error && meta.touched ? "error" : ""
    }`;
    return (
      <div className={className}>
        <label className="ui left aligned header">{label}</label>
        <input {...input} autoComplete="off" type={input.name} />
        {this.renderError(meta)}
      </div>
    );
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="ui centered grid">
        <div className="ten wide column">
          <div className="ui center aligned container twelve wide segment">
            <h1>Student Registration</h1>
            <form
              className="ui form error"
              onSubmit={handleSubmit(this.onSubmit)}
            >
              <Fields
                names={["firstName", "lastName"]}
                component={this.renderFields}
                label="Name"
              />
              <Field name="email" component={this.renderInput} label="Email" />
              <Field
                name="password"
                component={this.renderInput}
                label="password"
                type="password"
              />
              <Field name="number" component={this.renderInput} label="Age" />
              <Field
                name="checkbox"
                component={this.renderInput}
                label="Are you a parent registering you child?"
              />
              <button className="ui button primary">Submit</button>
              <p>
                <Link to="/student/login">
                  Already have an account? Click Here to Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
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
)(StudentRegistration);
