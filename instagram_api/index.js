"use strict"

/* Required imports */
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

/* Routers */
const instagramRouter = require('./routes/instagram-router')

/* Mongoose configuration */
// mongoose.Promise = global.Promise;
// mongoose.connect(`mongodb://mongo/instagram`, { useMongoClient: true });

/* Application */
const app = express();

/* Middlewares configuration */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Endpoints */
app.use('/instagram', instagramRouter);

/* Server start (child process) */
if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    var httpServer = http.createServer(app);
    httpServer.listen(8080, () => {
        console.log('Server started at port 8080');
    });
}
