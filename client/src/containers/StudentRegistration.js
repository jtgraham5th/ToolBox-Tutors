import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import { FullName, Input } from "../components/form";

class StudentRegistration extends React.Component {
  onSubmit = formValues => {
    console.log(this.props);
    this.props.studentSignUp(formValues);
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
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="ui centered grid">
        <div className="ten wide column">
          <div className="ui center aligned container twelve wide segment">
            <h1>Student Sign Up</h1>
            <form
              className="ui form error"
              onSubmit={handleSubmit(this.onSubmit)}
            >
              <Fields
                names={["firstName", "lastName"]}
                component={FullName}
                renderError={this.renderError}
                label="Name"
              />
              <Field
                name="email"
                component={Input}
                label="Email"
                renderError={this.renderError}
              />
              <Field
                name="password"
                component={Input}
                label="password"
                renderError={this.renderError}
              />
              <button className="ui button primary">Submit</button>
              <Link to="/student/login">
                Already have an account? Click Here to Sign In
              </Link>
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
