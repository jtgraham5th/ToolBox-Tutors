import React from "react";
import AdminControls from "../components/AdminControls";
import { connect } from "react-redux";
import { fetchCourses } from "../actions";
import { Link } from "react-router-dom";

class Tutor extends React.Component {
  componentDidMount() {
    // this.props.fetchCourses();
  }
  renderMenu() {
    return (
      <div className="ui vertical menu fluid">
        <Link to="#" className="item">Manage Courses</Link>
        <Link to="#" className="item">Upcoming Sessions</Link>
        <Link to="#" className="item">Resources</Link>
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
            <div className="twelve wide column">
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
