const fs = require("fs");
const path = require("path");

const commands = process.argv;
const projectName = commands[1];

console.log(__dirname, process.cwd(), __filename);
console.log(projectName);
fs.mkdirSync(projectName);
const src = path.resolve(projectName, "src");
fs.mkdirSync(src);
fs.mkdirSync(path.resolve(src, "containers"));
fs.mkdirSync(path.resolve(src, "components"));