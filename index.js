require('dotenv').config();

// Database
require('./database/config');

// Starting Server
const Server = require('./models/Server');
const server = new Server();
server.listen();
