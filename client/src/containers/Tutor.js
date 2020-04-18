import React from "react";
import AdminControls from "../components/AdminControls";
import { connect } from "react-redux";
import { fetchCourses } from "../actions";
import { Link } from "react-router-dom";


class Tutor extends React.Component {
  componentDidMount() {
    // this.props.fetchCourses();
    console.log(this.props);
  }
  renderMenu() {
    return (
      <div class="ui vertical menu fluid">
        <Link class="item">Add Courses</Link>
        <Link class="item">Upcoming Sessions</Link>
        <Link class="item">Resources</Link>
      </div>
    );
  }
  renderList() {}

  render() {
    return (
      <>
        <div className="ui segment attached">
        <div className="ui celled grid">
          <div className="row">
            <div className="ui four wide column">{this.renderMenu()}</div>
            <div className="ten wide column">
              <AdminControls />
            </div>
          </div>
        </div>
        Tutor Main
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
export default connect(mapStateToProps, { fetchCourses })(Tutor);
