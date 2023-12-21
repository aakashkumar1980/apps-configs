const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Set up the JSON file for storing data
const adapter = new FileSync('data.json');
const db = low(adapter);

// No need to set defaults if 'data.json' already has data
// db.defaults({ todos: [] }).write();

module.exports = db;
