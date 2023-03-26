const Course = require("../models/courseModel");
const mongoose = require("mongoose");

require("../config/mongo").connect();

//creating endpoint to get all courses
function getCourse(req,res){
  const query = Course.find({},{ name: 1 });
  query
    .exec()
    .then(courses => res.json(courses))
    .catch((err) => {
      res.status(500).send(err);
    });
};

//creating endpoint to create a course
function createCourse(req,res){
    const { name, description, files } = req.body;
    const _id = new mongoose.Types.ObjectId();
    const course = new Course({_id,name,description,files});
    course.save()
    .then(() => res.json(course))
    .catch(err => {
        res.status(500).send(err);
    });
}


module.exports = {getCourse,createCourse};

