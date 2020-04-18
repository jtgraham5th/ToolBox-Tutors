import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchCourses, addCourse } from "../actions";
import { TextArea, Input } from "../components/form";

class AdminControls extends React.Component {
  state = { courses: [] };
  componentDidMount = () => {
    this.props.fetchCourses();
    console.log(this.props);
  };
  renderError = () => {};

  renderInput = () => {
    return <Input />;
  };
  onSubmit = formValues => {
    this.props.addCourse(formValues);
  };
  currentCourses = () => {
    console.log(this.props.courses.length);
    if (this.props.courses.length <= 0) {
      return <div>...Loading</div>;
    } else if (this.props.courses.length > 0) {
      console.log(this.props.courses);
      const courses = this.props.courses;
      return courses.map(course => {
        return (
          <button class="ui right labeled icon button">
            <i class="right close icon"></i>
            {course.courseName}
          </button>
        );
      });
    }
  };

  render() {
    // const { subject, price, description } = this.props.course;
    const { handleSubmit } = this.props;
    return (
      <div className="segment">
        <div class="ui grid">
          <div className="twelve wide column">
            <h2>Add New Course</h2>

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
            <div>Remove Courses:</div>
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
  connect(mapStateToProps, { fetchCourses, addCourse }),
  reduxForm({
    form: "AdminControls",
    validate
  })
)(AdminControls);
