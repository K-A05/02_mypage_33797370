const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Page</title>
</head>
<body>
    <h1>Welcome to My Page!</h1>
    <h2>About Me</h2>
    <p>Hi, my name is Karan. I am a Computer Science student and I enjoy learning about technology, cybersecurity, and drones.</p>
    <h2>Hobbies</h2>
    <p>I like programming, working on small projects, I like working with tools and 3d printers.</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlContent);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});