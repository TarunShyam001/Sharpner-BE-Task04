const http = require('http');

const PORT = 4000;
const name = "Tarun Shyam"

const server = http.createServer((req, res) => {
  console.log(`My name is ${name}.`);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
