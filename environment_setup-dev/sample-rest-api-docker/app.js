const http = require('http');
const db = require('./db');
const { getReqData } = require('./utils');

const PORT = process.env.PORT || 8080;
const HOST = 'localhost';

function setCorsHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

const server = http.createServer(async (req, res) => {
    console.log('Called ' + req.method + ' : ' + req.url);

    // CORS
    setCorsHeaders(res);
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Base URL
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('Welcome, this is your Home page\n');
    }

    // Health check and uptime endpoint
    else if (req.url === '/health' && req.method === 'GET') {
        const healthcheck = {
            uptime: process.uptime(),
            message: 'OK',
            timestamp: Date.now(),
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(healthcheck));
    }

    // GET all todos
    else if (req.url === '/api/todos' && req.method === 'GET') {
        const todos = db.get('todos').value();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
    }

    // GET a single todo by id
    else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === 'GET') {
        try {
            const id = req.url.split('/')[3];
            const todo = db.get('todos').find({ id }).value();
            if (!todo) {
                throw new Error('Todo not found');
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(todo));
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.toString() }));
        }
    }

    // POST a new todo
    else if (req.url === '/api/todos' && req.method === 'POST') {
        let todo_data = await getReqData(req);
        let newTodo = JSON.parse(todo_data);
        newTodo.id = Date.now().toString();
        db.get('todos').push(newTodo).write();
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newTodo));
    }

    // DELETE a todo
    else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === 'DELETE') {
        try {
            const id = req.url.split('/')[3];
            const todo = db.get('todos').find({ id }).value();
            if (!todo) {
                throw new Error('Todo not found');
            }
            db.get('todos').remove({ id }).write();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Todo deleted' }));
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.toString() }));
        }
    }

    // PATCH/UPDATE a todo
    else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === 'PATCH') {
        try {
            const id = req.url.split('/')[3];
            let todo_data = await getReqData(req);
            let updatedData = JSON.parse(todo_data);
            const todo = db.get('todos').find({ id }).value();
            if (!todo) {
                throw new Error('Todo not found');
            }
            db.get('todos').find({ id }).assign(updatedData).write();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Todo updated' }));
        } catch (error) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: error.toString() }));
        }
    }

    // No route present
    else {
        console.warn('This endpoint is not implemented / unavailable at the moment !!');
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server started on ${HOST} port: ${PORT}`);
});
