const server = require('./server.cjs')

const port = process.env.PORT || 8080;

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))