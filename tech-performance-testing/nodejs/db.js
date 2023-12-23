const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://root:apple26j@172.31.11.9:27017/privatelearningv2?authSource=admin';
let db;
let client;

const connectToServer = async (callback) => {
  console.log('Trying to connect to MongoDB...');
  try {
    client = await MongoClient.connect(url);
    db = client.db();
    console.log('Connected to MongoDB successfully');
    callback(null);
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    callback(err);
  }
};

const getDb = () => {
  return db;
};

const closeConnection = async () => {
  if (client) {
    await client.close();
  }
};

module.exports = { connectToServer, getDb, closeConnection };
