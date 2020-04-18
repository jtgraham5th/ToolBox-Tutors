const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignIn = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", requireAuth, function(req, res) {
    res.send({ hi: "there" });
  });  
  app.post("/tutor/login", requireSignIn,Authentication.tutorLogin);
  app.post("/tutor/sign-up", Authentication.tutorSignup);
  app.post("/tutor/admin/addCourse", Authentication.addCourse);
  
  app.post("/student/login", requireSignIn, Authentication.studentLogin);
  app.post("/student/sign-up", Authentication.studentSignup);

  // app.post("/signup", Authentication.signup);
  // app.post("/signin", requireSignIn, Authentication.signin);
};

// ORIGINAL WAY:
// module.exports = function (app) {
//     app.get('/', function(req, res, next) {
//         res.send(['water bottle', 'phone', 'paper'])
//     })
// }
