const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    publicDir: path.resolve(appDirectory, '../public'),
}