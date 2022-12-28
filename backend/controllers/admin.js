const Course = require("../models/courseModel");

require("../config/mongo").connect();

//creating endpoint to get all courses
function get(req,res){
  const query = Course.find({});
  query
    .exec()
    .then(courses => res.json(courses))
    .catch((err) => {
      res.status(500).send(err);
    });
};

//creating endpoint to create a course
function create(req,res){
    const { _id, name, description, files } = req.body;
    const course = new Course({_id,name,description,files});
    course.save()
    .then(() => res.json(course))
    .catch(err => {
        res.status(500).send(err);
    });
}


module.exports = {get,create};

