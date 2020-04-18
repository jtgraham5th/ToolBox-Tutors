import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchCourses, addCourse, removeCourse } from "../actions";
import { TextArea, Input } from "../components/form";

class AdminControls extends React.Component {
  state = { courses: [] };
  componentDidMount = () => {
    this.props.fetchCourses();
  };
  renderError = () => {};

  renderInput = () => {
    return <Input />;
  };
  onSubmit = formValues => {
    this.props.addCourse(formValues);
  };
  removeCourse = courseName => {
    this.props.removeCourse(courseName);
  };
  currentCourses = () => {
    if (this.props.courses.length <= 0) {
      return <div>...Loading</div>;
    } else if (this.props.courses.length > 0) {
      const courses = this.props.courses;
      return (
        <div className="ui vertical buttons">
          {courses.map(course => {
            return (
              <button
                key={course._id}
                className="ui right labeled icon button"
                onClick={() => this.removeCourse(`${course.courseName}`)}
              >
                <i className="close icon"></i>
                {course.courseName}
              </button>
            );
          })}
        </div>
      );
    }
  };

  render() {
    // const { subject, price, description } = this.props.course;
    const { handleSubmit } = this.props;
    return (
      <div className="segment">
        <div className="ui grid">
          <div className="twelve wide column">
            <h3>Add New Course</h3>

            <form
              className="ui form error"
              onSubmit={handleSubmit(this.onSubmit)}
            >
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
          <div className="four wide column">
            <h3>Remove Courses:</h3>
            {this.currentCourses()}
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
const mapStateToProps = state => {
  console.log(state);
  return {
    courses: state.courses
  };
};
export default compose(
  connect(mapStateToProps, { fetchCourses, addCourse, removeCourse }),
  reduxForm({
    form: "AdminControls",
    validate
  })
)(AdminControls);
