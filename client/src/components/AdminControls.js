import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import { TextArea, Input } from "../components/form";

class AdminControls extends React.Component {
  renderError = () => {};
  renderInput = () => {
    return <Input />;
  };
  onSubmit = formValues => {
    this.props.addCourse(formValues);
  };

  render() {
    // const { subject, price, description } = this.props.course;
    const { handleSubmit } = this.props;
    return (
      <div className="segment">
        <h2>Add New Subject</h2>

        <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="subject"
            component={Input}
            label="Course Name"
            renderError={this.renderError}
          />
          <Field
            name="price"
            component={Input}
            label="Price"
            renderError={this.renderError}
          />
          <Field
            name="textarea"
            component={TextArea}
            label="Give a short description about why you should be selected to become a toolbox tutor?"
          />
          <button className="ui button inverted green">Add Course</button>
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
    form: "AdminControls",
    validate
  })
)(AdminControls);
