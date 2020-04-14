import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Courses from "./containers/Courses";
import CourseDetail from "./containers/CourseDetail";
import CourseSignUp from "./containers/CourseSignUp";
import Header from "./components/Header";
import OnlineTutoring from "./containers/OnlineTutoring";
import Tutors from "./containers/Tutors";
import Calendar from "./components/Calendar";
import LoginHeader from './components/LoginHeader'
import history from "./history";
import TutorLogin from "./containers/TutorLogin";
import StudentLogin from "./containers/StudentLogin";

function App() {
  return (
    <div className="ui container fluid">
      <Router history={history}>
        <div>
          <LoginHeader />
          <Header />
          <Switch>
            <Route path="/" exact component={Courses} />
            <Route path="/course/:subject" exact component={CourseDetail} />
            <Route
              path="/course/:subject/signup"
              exact
              component={CourseSignUp}
            />
            <Route path="/tutors" exact component={Tutors} />
            <Route path="/login/student" exact component={StudentLogin} />
            <Route path="/login/tutor" exact component={TutorLogin} />
            <Route path="/onlineTutoring" exact component={OnlineTutoring} />
            <Route path="/calendar" exact component={Calendar} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
