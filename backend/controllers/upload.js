const mongoose = require("mongoose");
const Course = require("../models/courseModel");
const  User = require("../models/userModel");
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");
const { Readable } = require("stream");

require("../config/mongo").connect();

// Set the connection string for the storage account
const connectionString = `DefaultEndpointsProtocol=https;AccountName=${process.env.STORAGE_ACCOUNT};AccountKey=${process.env.STORAGE_KEY};EndpointSuffix=core.windows.net`;

// Create a new BlobServiceClient using the connection string
const blobServiceClient =
  BlobServiceClient.fromConnectionString(connectionString);

// Get a reference to the container where the file will be stored
const containerClient = blobServiceClient.getContainerClient(
  process.env.STORAGE_CONTAINER
);

//creating endpoint to add a file to a course
function uploadFile(req, res) {
  const { course_name } = req.body;

  // Read the contents of the file into a buffer and it's other properties
  const _id = new mongoose.Types.ObjectId();
  const name = req.file.originalname;
  const size = req.file.size;
  const type = req.file.mimetype;
  const file = Buffer.from(req.file.buffer);

  //creating readable stream
  const readableStream = new Readable({
    read() {
      this.push(file);
      this.push(null);
    },
  });

  // Create a new block blob client for the file
  const blockBlobClient = containerClient.getBlockBlobClient(name);

  // Upload the file to Azure Blob Storage
  blockBlobClient
    .uploadStream(readableStream)
    .then(() => {})
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });

  // Get the URL of the stored file
  const fileUrl = blockBlobClient.url;

  //new file object to be added to course
  const uploaded_by = req.session.user.name;
  const newFile = { _id, uploaded_by, name, fileUrl, size, type };

  Promise.all(
    [ Course.findOneAndUpdate(
    { name: course_name },
    { $addToSet: { files: newFile } },
    { new: true }
  ).exec(),

    User.findOneAndUpdate(
    { username: uploaded_by },
    { $addToSet: { uploads: newFile } },
    { new: true }
  ).exec()

]).then(() => res.status(200).json("Uploaded successfully"))
    .catch((err) => {
      res.status(500).send(err);
    });
}


module.exports = { uploadFile };
