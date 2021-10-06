const express         = require('express');
const cors            = require('cors');
const {dbConnection}  = require('../database/config');

class Server {
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 4001;
    this.usersRoutePath = "/api/users";
    this.supportRoutePath = "/api/supports";
    this.requestRoutePath = "/api/requests";

    // DB Connection
    this.connectDB();

    // Middlewares
    this.midlewares();

    // Routes
    this.routes();
  }

  // *************** Methods *******************//

  async connectDB() {
    await dbConnection();
  }

  midlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.usersRoutePath, require('../routes/users.route'));
    this.app.use(this.supportRoutePath, require('../routes/support.route'));
    this.app.use(this.requestRoutePath, require('../routes/request.route'));
  }

  listen() {
    this.app.listen(this.port, () => console.log('Server running on Port', this.port));
  }

}

module.exports = Server;
