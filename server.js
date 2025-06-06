const express = require('../../codes/node_modules/express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '.')));

app.listen(6969, () => {
console.log('server is running on 6969');
});
