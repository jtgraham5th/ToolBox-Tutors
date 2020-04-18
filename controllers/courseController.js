const Course = require("../models/course");

exports.fetchCourses = function(req, res, next) {
  Course.find()
    .then(courses => {
      res.json({
        message: "Requested All Courses",
        error: false,
        data: courses
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        message: err.message,
        error: true
      });
    });
};
