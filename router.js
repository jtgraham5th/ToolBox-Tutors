const Authentication = require("./controllers/authentication");
const CourseController = require("./controllers/courseController");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignIn = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", requireAuth, function(req, res) {
    res.send({ hi: "there" });
  });
  app.post("/tutor/login", requireSignIn, Authentication.tutorLogin);
  app.post("/tutor/sign-up", Authentication.tutorSignup);
  app.post("/tutor/admin/addCourse", CourseController.addCourse);
  app.delete("/tutor/admin/removeCourse/:id", CourseController.removeCourse);

  app.post("/student/login", requireSignIn, Authentication.studentLogin);
  app.post("/student/sign-up", Authentication.studentSignup);

  app.get("/courses", CourseController.fetchCourses);

  // app.post("/signup", Authentication.signup);
  // app.post("/signin", requireSignIn, Authentication.signin);
};

// ORIGINAL WAY:
// module.exports = function (app) {
//     app.get('/', function(req, res, next) {
//         res.send(['water bottle', 'phone', 'paper'])
//     })
// }
