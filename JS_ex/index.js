const { writeFileSync } = require("fs");
const os = require("os");

console.log("Dir Name>>>" + __dirname);
console.log("Dir Name>>>" + __filename);

writeFileSync("hello.txt", "Hello World")
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
//OS
console.log(os.arch());
console.log(os.totalmem() / (1024 * 1024 * 1024));
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());