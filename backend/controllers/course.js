const Course = require("../models/courseModel");

require("../config/mongo").connect();

//creating an endpoint to get a course
function getCourse(req, res) {
  const course_name  = req.params.course;

  const query = Course.find(
    { name: course_name }
  );
  query
    .exec()
    .then(course => res.json(course))
    .catch((err) => {
      res.status(500).send(err);
    });
}

module.exports = { getCourse };
