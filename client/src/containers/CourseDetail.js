import React from "react";
import Calendar from "../components/Calendar";
import CourseDetailCard from "../components/CourseDetailCard";
import { fetchCourse } from "../actions";
import { connect } from "react-redux";

class ClassDetail extends React.Component {
  render() {
    if (!this.props.course) {
      console.log(this.props.course);
      return <div>...Loading</div>;
    } else {
      const course = this.props.courses;
      console.log(course);
      return (
        <div className="ui celled grid">
          <div className="row">
            <div className="ui four wide column">
              <div className="ui cards ">
                <CourseDetailCard course={this.props.course} />
              </div>
            </div>
            <div className="ten wide column">
              <Calendar />
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    course: state.courses[ownProps.match.params.subject]
  };
};
export default connect(mapStateToProps, { fetchCourse })(ClassDetail);
