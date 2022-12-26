const Course = require("../models/courseModel");


require("../config/mongo").connect();

//creating endpoint to add a file to a course
function add(req,res){
    const { course_name, _id, uploaded_by} = req.body;
    
    // Read the contents of the file into a buffer and it's other properties
    const name = req.file.originalname;
    const size = req.file.size;
    const type = req.file.mimetype;
    const file = Buffer.from(req.file.buffer);

    const newFile = { _id, uploaded_by, name, file, size, type };
    const query = Course.findOneAndUpdate(
      { name: course_name },
      { $addToSet: { files: newFile } },
      { new: true}
    );
  query
    .exec()
    .then((doc) => res.json(doc))
    .catch((err) => {
      res.status(500).send(err);
    });
}

module.exports = { add };