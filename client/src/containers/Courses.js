import React from "react";
import CourseDetailCard from "../components/CourseDetailCard";
import { connect } from "react-redux";
import { fetchCourses } from "../actions";

class Courses extends React.Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  renderList() {
    if (!Object.keys(this.props.courses).length) {
      return <div>...Loading</div>;
    } else {
      const courses = this.props.courses;
      return courses.map(course => {
        return <CourseDetailCard key={course._id} course={course} />;
      });
    }
  }

  render() {
    return (
      <>
        <div className="ui segment attached">
          Choose from one of our many courses below:
        </div>
        <div className="ui segment cards">{this.renderList()}</div>
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
export default connect(mapStateToProps, { fetchCourses })(Courses);
