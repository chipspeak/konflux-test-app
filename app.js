const express = require('express')
const app = express()

// test
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Server ready!'))