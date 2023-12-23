const fs = require('fs');
const database = require('./db'); // Adjust the path as necessary

async function apiRoutes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });


  fastify.get('/api/employee/position/regular', async (request, reply) => {
    const db = database.getDb();
  
    // Initialize an object to hold max salary employees by position
    let maxSalaryByPosition = {};
    let hiredMap = {};
  
    try {
      // Stream hired-records and build a map
      const hiredStream = db.collection('hired-records').find().stream();
      for await (const record of hiredStream) {
        if (!hiredMap[record.name] || hiredMap[record.name] > record.hired) {
          hiredMap[record.name] = record.hired;
        }
      }
  
      // Stream employee-records and process data
      const employeeStream = db.collection('employee-records').find().stream();
      for await (const record of employeeStream) {
        const { name, position, salary } = record;
        if (!maxSalaryByPosition[position] || maxSalaryByPosition[position].salary < salary) {
          maxSalaryByPosition[position] = { name, position, salary, hired: hiredMap[name] || null };
        }
      }
  
    } catch (err) {
      return reply.code(500).send({ error: 'Error querying database' });
    }
  
    // Convert the processed data into an array
    const resultArray = Object.values(maxSalaryByPosition);
  
    // Sort the array by name in ascending order
    resultArray.sort((a, b) => a.name.localeCompare(b.name));
  
    return resultArray;
  });
  
  fastify.get('/api/employee/position/optimized', async (request, reply) => {
    const db = database.getDb();
  
    let result;
    try {
      result = await db.collection('employee-records').aggregate([
        { $sort: { salary: -1 } },
        { $group: { _id: "$position", maxSalaryEmployee: { $first: "$$ROOT" } } },
        {
          $lookup: {
            from: "hired-records",
            let: { employeeName: "$maxSalaryEmployee.name" },
            pipeline: [
              { $match: { $expr: { $eq: ["$name", "$$employeeName"] } } },
              { $sort: { hired: 1 } }, // Sort by hired date, can use -1 for latest
              { $limit: 1 } // Limit to 1 document
            ],
            as: "hiredInfo"
          }
        },
        { $unwind: { path: "$hiredInfo", preserveNullAndEmptyArrays: true } },
        {
          $project: {
            _id: 0,
            name: "$maxSalaryEmployee.name",
            position: "$_id",
            salary: "$maxSalaryEmployee.salary",
            hired: "$hiredInfo.hired"
          }
        },
        { $sort: { name: 1 } } // Sort by name in ascending order
      ]).toArray();
    } catch (err) {
      return reply.code(500).send({ error: 'Error querying database' });
    }
  
    return result;
  });
  
  

}

module.exports = apiRoutes;
