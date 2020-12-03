//console.log("hello world");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>navigation</title>
      <style>
          .navbar {
              background-color: black;
              border-radius: 20px;
          }
  
          .navbar ul {
              overflow: auto;
          }
  
          .navbar li {
              float: left;
              list-style: none;
              padding: 13px 20px;
          }
  
          .navbar li a {
  
              padding: 2px 1px;
              text-decoration: none;
              color: whitesmoke;
          }
          .navbar li a:hover {
              color: blue;
          }
          .search{
              float: right;
              color: whitesmoke;
              padding: 12px 75px;
          }
          .navbar input{
              border: 3px solid black;
              border-radius: 20px;
              padding: 5px 15px;
          }
      </style>
  </head>
  
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li> <a href="#"> Home </a></li>
                  <li> <a href="#"> about </a></li>
                  <li> <a href="#"> service </a></li>
                  <li> <a href="#"> contact </a></li>
                  <div class="search">
                      <input type="text" name="search" id="search" placeholder="sesrch this website">
                      
                  </div>
              </ul>
          </nav>
      </header>
  
  </body>
  
  </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});