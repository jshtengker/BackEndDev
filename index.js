const http = require('http');
const url = require('url');
const members = require('./members')
const users = require('./users')

const server = http.createServer( (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write("This is the home page")
        res.end();
      }

      else if (parsedUrl.pathname === '/about') {
        const responseJson = {
          Status: 'success',
          Message: 'response success',
          Description: 'Exercise #03',
          Date: new Date().toISOString(),
          Data: members.getMembers(),
        };
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify(responseJson, null, 2) + '\n');
  }

    else if (parsedUrl.pathname === '/users') {
        users.getUsers();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify(users.getUsers(), null, 2) + '\n');
    }

}).listen(3000)