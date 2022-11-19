const fs = require("fs");
const path = require("path");

// console.log(process);
// console.log(process.argv);

try {
  //************CREATE AND DELETE FILES************* */
  // if (process.argv[2] == "add") {
  //   fs.writeFileSync(process.argv[3], process.argv[4]);
  // } else if (process.argv[2] = "delete") {
  //   fs.unlinkSync(process.argv[3])
  // } else {
  //   console.log("Inavlid option");
  // }

  // // fs.readdir(path.join(__dirname))
  // fs.readdir(__dirname, (error, files) => {
  //   console.log(files);
  // })
  // console.log();
  //***************READ FILE********************* */
  const filePath = path.join(__dirname, "/orange.txt");
  // console.log(filePath);
  // fs.readFile(filePath, "utf8", (err, item) => {
  //   console.log(item);
  // })
  //******** APPEND FILE************** */
  // fs.appendFile(filePath, " And is also color", (err) => {
  //   if (!err) {
  //     console.log("File Updated");

  //   }
  // })

  // **********RENAME FILE***************

  fs.rename(filePath, path.join(__dirname) + "/fruits.txt", (err) => {
    if (!err) {
      console.log("Renamed!!!")
    }
  })


} catch (error) {
  console.log("Some error:" + error.message);
}
