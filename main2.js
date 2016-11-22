var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString()+"写成readFile 而不是readFileSync");
});

console.log("程序执行结束!");	