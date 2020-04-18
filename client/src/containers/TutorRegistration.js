import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import {
  FullName,
  Input,
  MultiSelect,
  MultiCheckbox,
  TextArea,
  DropdownSelect,
} from "../components/form";

class TutorRegistration extends React.Component {
  onSubmit = formValues => {
    console.log(this.props)
    this.props.tutorSignUp(formValues);
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
  renderEmployment;
  renderStartDate = ({ input, label }) => {
    return (
      <div className="field">
        <label className="ui left aligned header">{label}</label>
        <Calendar
          format="dateInput"
          {...input}
          select
          value={input.value}
          onChange={(param, data) => input.onChange(data.value)}
        />
      </div>
    );
  };
  render() {
    const employmentStatus = [
      { key: "employed", text: "Employed", value: "employed" },
      { key: "unemployed", text: "Unemployed", value: "unemployed" },
      {
        key: "self-employed",
        text: "Self Employed",
        value: "self-employed"
      },
      { key: "student", text: "Student", value: "student" }
    ];
    const subjects = [
      { key: "math", text: "Math", value: "math" },
      { key: "science", text: "Science", value: "science" },
      {
        key: "social studies",
        text: "Social Studies",
        value: "social studies"
      },
      { key: "ela", text: "English / Language Arts", value: "ela" },
      { key: "test prep", text: "Test Preparation", value: "test prep" }
    ];
    const education = [
      { key: "SHS", text: "Some High School", value: "SHS" },
      { key: "HSD", text: "High School Diploma", value: "UG" },
      {
        key: "GED",
        text: "GED",
        value: "GED"
      },
      { key: "SUG", text: "Some College", value: "SUG" },
      { key: "ASD", text: "Associate's Degree", value: "ASD" },
      { key: "BCD", text: "Bachelor's Degree", value: "BCD" },
      { key: "SPG", text: "Some Graduate College", value: "SPG" },
      { key: "MSD", text: "Master's Degree", value: "MSD" },
      { key: "DRD", text: "Doctorate's Degree", value: "test prep" }
    ];
    const { handleSubmit } = this.props;
    return (
      <div className="ui centered grid">
        <div className="ten wide column">
          <div className="ui center aligned container twelve wide segment">
            <h1>Tutor Application</h1>
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
              <Field
                multi
                name="subjects"
                component={MultiSelect}
                label="What subjects are you available to teach?"
                options={subjects}
                renderError={this.renderError}
              />
              <Field
                name="startDate"
                component={this.renderStartDate}
                label="Available Start Date"
                type="select"
              />
              <Field
                multi
                name="availability"
                component={MultiCheckbox}
                label="What days are you available to work"
              />
              <Field
                name="employmentStatus"
                component={DropdownSelect}
                label="Employment Status"
                options={employmentStatus}
              />
              <Field
                name="education"
                component={DropdownSelect}
                label="Highest Degree Earned"
                options={education}
                type="select"
              />
              <Field
                name="resume"
                component={Input}
                label="Please provide a link to your resume"
                type="text"
              />
              <Field
                name="textarea"
                component={TextArea}
                label="Give a short description about why you should be selected to become a toolbox tutor?"
              />
              <button className="ui button primary">Submit</button>
              <Link to="/tutor/login">
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
    form: "TutorSignUp",
    validate
  })
)(TutorRegistration);
