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
import StudentRegistration from "./containers/StudentRegistration";
import TutorRegistration from "./containers/TutorRegistration";

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
            <Route path="/student/login" exact component={StudentLogin} />
            <Route path="/student/register" exact component={StudentRegistration} />
            <Route path="/tutor/login" exact component={TutorLogin} />
            <Route path="/tutor/register" exact component={TutorRegistration} />
            <Route path="/onlineTutoring" exact component={OnlineTutoring} />
            <Route path="/calendar" exact component={Calendar} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
