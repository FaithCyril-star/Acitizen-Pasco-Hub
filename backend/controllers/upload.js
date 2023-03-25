const mongoose = require("mongoose");
const Course = require("../models/courseModel");
const  User = require("../models/userModel");
const {
  BlobServiceClient
} = require("@azure/storage-blob");
const { Readable } = require("stream");
const Api2Pdf = require('api2pdf'); 
const { formatSize } = require('../helpers/formatSize');

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
  const size = formatSize(req.file.size);
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
      res.status(500).send(err);
    });

  // Get the URL of the stored file
  const fileUrl = blockBlobClient.url;

  //Get URL of file preview
  const a2pClient = new Api2Pdf(process.env.API2PDF_KEY);
  a2pClient.libreOfficeThumbnail(fileUrl)
  .then((result) => 
  { 
    const filePreview = result.FileUrl;
    //new file object to be added to course
    const newFile = { _id,name, fileUrl, filePreview, size, type };

      Course.findOneAndUpdate(
        { name: course_name },
        { $addToSet: { files: newFile } },
        { new: true }
      ).exec()
    .then(() => res.status(200).json("Uploaded successfully"))
        .catch((err) => {
          res.status(500).send(err);
        });

  })
  .catch(err => res.status(500).send(err));


};


module.exports = { uploadFile };
