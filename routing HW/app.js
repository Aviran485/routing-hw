const http = require('http'); // Import the HTTP module to create a server.
const fs = require('fs'); // Import the File System module to read files.
const path = require('path'); // Import the Path module to handle file paths.

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Serve the homepage or the page route
  if (req.url === '/' || req.url === '/page') {
    const filePath = path.join(__dirname, 'templates', 'page.html'); // Path to the homepage HTML file.
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // Handle error if the file can't be read
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      // Successfully serve the HTML file
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  // Serve the About Us page
  else if (req.url === '/about.html') {
    const cssPath = path.join(__dirname, 'templates', 'about.html'); // Path to the About Us page HTML file.
    fs.readFile(cssPath, 'utf8', (err, data) => {
      if (err) {
        // Handle error if the file can't be read
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      // Successfully serve the About Us page
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  // Serve the CSS file
  else if (req.url === '/styles/styles.css') {
    const cssPath = path.join(__dirname, 'styles', 'styles.css'); // Path to the CSS file.
    fs.readFile(cssPath, 'utf8', (err, data) => {
      if (err) {
        // Handle error if the file can't be read
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      // Successfully serve the CSS file
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  }
  // Serve the Contact Us page
  else if (req.url === '/contact.html') {
    const cssPath = path.join(__dirname, 'templates', 'contact.html'); // Path to the Contact Us page HTML file.
    fs.readFile(cssPath, 'utf8', (err, data) => {
      if (err) {
        // Handle error if the file can't be read
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      // Successfully serve the Contact Us page
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  else {
    // Handle requests to routes that don't exist
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000'); // Log server status
});
