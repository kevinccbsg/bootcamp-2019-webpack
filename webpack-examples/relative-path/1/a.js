/* eslint-disable */
// const { join } = require('path');
const filePath = '../2/b.txt';
// const filePathJoin = join(__dirname, '..', '2', 'b.txt');
const content = require('fs').readFileSync(filePath);
console.log(content.toString());
