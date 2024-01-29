const http = require('http');
const url = require('url');
const members = require('./members')
const users = require('./users')
const moment = require('moment');


const server = http.createServer( (req, res) => {

    const url = req.url

      if (url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write(`this is the first page\n${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
        res.end();
      }

      else if (url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.write(JSON.stringify({
          Status: 'success',
          Message: 'response success',
          Description: 'Exercise #03',
          Date: moment().format(),
          Data: members,
        }))
        res.end();
  }
      else if (url === '/users'){
        // users.getUsers();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/json');
        res.write(JSON.stringify(users));
        res.end();
    }

});

const port = 3000;
const hostname = "127.0.0.1"

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});