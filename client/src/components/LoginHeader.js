import React from "react";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="ui  borderless menu top attached">
      <div className="link header item">
        <h1>Toolbox Tutors</h1>
      </div>
      <div className="right menu">
        <div className="item">
          <Link to="/student/login">
            <div className="ui button green">Student Login</div>
          </Link>
          <Link to="/tutor/login">
            <div className="ui button blue">Tutor Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginHeader;
