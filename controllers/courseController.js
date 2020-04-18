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
exports.addCourse = function(req, res, next) {
  const { subject, price, textarea } = req.body;
  if (!subject || !price) {
    return res
      .status(422)
      .send({ error: "You must provide a course name and price" });
  }
  Course.findOne({ courseName: subject }, function(err, existingCourse) {
    if (err) {
      return next(err);
    }
    //If a user with email does exist, return an error
    if (existingCourse) {
      return res.status(422).send({ error: "Course already exists" });
    }
    const course = new Course({
      courseName: subject,
      price: price,
      description: textarea
    });
    course.save(function(err) {
      if (err) {
        return next(err);
      }
      //respond to the request indicating User was created
      res.send({ msg: "Course Created Succesfully" });
    });
  });
};
exports.removeCourse = function(req, res, next) {
  const id = req.params.id
  if (!id) {
    return res.status(422).send({ error: "No course name provided" });
  }
  Course.deleteOne({ courseName: id }, function(err, response) {
    if (err) {
      return next(err);
    }
    res.send({ msg: "Course removed", data: response });
  });
};
