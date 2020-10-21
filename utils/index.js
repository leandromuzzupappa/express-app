const path = require('path');

const getAbsolutePath = filepath => path.join(__dirname, filepath);

module.exports = getAbsolutePath;