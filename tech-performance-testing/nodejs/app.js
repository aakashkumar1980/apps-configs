const fastify = require('fastify')({ logger: true });
const apiRoutes = require('./api');
const database = require('./db');


database.connectToServer((err) => {
  console.log('Initializing connection to MongoDB...');
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }

  fastify.register(apiRoutes);
  startServer();
});
const startServer = async () => {
  try {
    // Configure server options
    const serverOptions = {
      port: process.env.PORT || 3000, // Default to 3000 if environment variable is not set
      host: process.env.HOST || '0.0.0.0' // Default to '0.0.0.0' for listening on all interfaces
    };

    await fastify.listen(serverOptions);
    console.log('Server started and listening on port 3000');
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};
fastify.setNotFoundHandler((request, reply) => {
  reply.code(404).send({ error: 'Route not found' });
});

module.exports = fastify;
