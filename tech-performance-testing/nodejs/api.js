const fs = require('fs');
const database = require('./db'); // Adjust the path as necessary

async function apiRoutes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });

  fastify.get('/api/employee/position', async (request, reply) => {
    const db = database.getDb();

    let result;
    try {
      result = await db.collection('employee-records').aggregate([
        { $sort: { salary: -1 } },
        { $group: { _id: "$position", maxSalaryEmployee: { $first: "$$ROOT" } } },
        {
          $lookup: {
            from: "hired-records",
            localField: "maxSalaryEmployee.name",
            foreignField: "name",
            as: "hiredInfo"
          }
        },
        { $unwind: "$hiredInfo" },
        {
          $project: {
            _id: 0,
            name: "$maxSalaryEmployee.name",
            position: "$_id",
            salary: "$maxSalaryEmployee.salary",
            hired: "$hiredInfo.hired"
          }
        }
      ]).toArray();
    } catch (err) {
      return reply.code(500).send({ error: 'Error querying database' });
    }

    return result;
  });

}

module.exports = apiRoutes;
