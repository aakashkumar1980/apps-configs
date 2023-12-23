const fs = require('fs');
const database = require('./db'); // Adjust the path as necessary

async function apiRoutes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });


  /**
   * @description Employees with max salary by position are computed using stream.
   * 
   * @note This uses stream to process the large dataset for optimized performance.
   * However, it is not suitable for every use case and specially those that require partitioning, grouping kind of operations.
   * The reason is that stream is not suitable for such operations and it is better to use MongoDB native aggregation pipelines.
   * In this example it fits to guage the performance of NodeJS application.
   */
  fastify.get('/api/employee/position/regular', async (request, reply) => {
    const db = database.getDb();
  
    // Initialize an object to hold max salary employees by position
    let maxSalaryByPosition = {};
    let hiredMap = {};
  
    try {
      // Stream hired-records and build a map
      const hiredStream = db.collection('hire').find().stream();
      for await (const record of hiredStream) {
        if (!hiredMap[record.name] || hiredMap[record.name] > record.hired) {
          hiredMap[record.name] = record.hired;
        }
      }
  
      // Stream employee-records and process data
      const employeeStream = db.collection('employees').find().stream();
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
  

  /**
   * @Unfit for development
   * @description This requires a lot of MongoDB cpu/memory and is not suitable for development.
   *
  fastify.get('/api/employee/position/optimized', async (request, reply) => {
    const db = database.getDb();
  
    let result;
    try {
      result = await db.collection('employees').aggregate([
        { $sort: { salary: -1 } },
        { $group: { _id: "$position", maxSalaryEmployee: { $first: "$$ROOT" } } },
        {
          $lookup: {
            from: "hire",
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
  **/

}

module.exports = apiRoutes;
