import React from "react";
import CourseDetailCard from "../components/CourseDetailCard";
import { connect } from "react-redux";
import { fetchCourses } from "../actions";

class Student extends React.Component {
  componentDidMount() {
    // this.props.fetchCourses();
    console.log(this.props);
  }

  renderList() {
    if (!Object.keys(this.props.courses).length) {
      console.log(this.props.courses);
      return <div>...Loading</div>;
    } else {
      const courses = this.props.courses;
      console.log(courses)
      return courses.map(course => {
        return <CourseDetailCard course={course} />;
      });
    }
  }

  render() {
    return (
      <>
        <div className="ui segment attached">
        Student
        </div>
        {/* <div className="ui segment cards">{this.renderList()}</div> */}
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    courses: Object.values(state.courses)
  };
};
export default connect(mapStateToProps, { fetchCourses })(Student);
