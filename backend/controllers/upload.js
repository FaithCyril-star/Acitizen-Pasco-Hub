const Course = require("../models/courseModel");
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");
const { Readable } = require("stream");

require("../config/mongo").connect();

// Set the connection string for the storage account
const connectionString = `DefaultEndpointsProtocol=https;AccountName=${process.env.STORAGE_ACCOUNT};AccountKey=${process.env.STORAGE_KEY};EndpointSuffix=core.windows.net`;


// Create a new BlobServiceClient using the connection string
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

// Get a reference to the container where the file will be stored
const containerClient = blobServiceClient.getContainerClient(process.env.STORAGE_CONTAINER);

//creating endpoint to add a file to a course
function add(req, res) {
  const { course_name, _id, uploaded_by } = req.body;

  // Read the contents of the file into a buffer and it's other properties
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
  const newFile = { _id, uploaded_by, name, fileUrl, size, type };
  const query = Course.findOneAndUpdate(
    { name: course_name },
    { $addToSet: { files: newFile } },
    { new: true }
  );
  query
    .exec()
    .then((doc) => res.json(doc))
    .catch((err) => {
      res.status(500).send(err);
    });
}

module.exports = { add };
