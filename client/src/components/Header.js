import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui menu attached">
      <div className="link header item">
        <i className="book icon"></i>
      </div>
      <Link to="/">
        <div className="link item active">Home</div>
      </Link>
      <Link to="/">
        <div className="link item">Classes</div>
      </Link>
      <Link to="/tutors">
        <div className="link item">Become A Tutor</div>
      </Link>
      <Link to="/onlineTutoring">
        <div className="link item">Online Tutoring</div>
      </Link>
    </div>
  );
};
export default Header;
