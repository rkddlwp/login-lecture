const fs = require("fs");
const appRoot = require("app-root-path"); // app.js 루트를 할당해줌

const accessLogStream = fs.createWriteStream(`${appRoot}/log/access.log`, { flags: 'a' }
);

module.exports = accessLogStream;