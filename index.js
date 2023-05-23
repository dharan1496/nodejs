// const hero = require('./add').superhero;
// console.log(hero.getName());
// hero.setName('superman');
// console.log(hero.getName());
// console.log(__filename, __dirname);
// console.log(this);
// const hero1 = require('./add').superhero;
// console.log(hero1.getName());
// hero1.setName('green latern');
// console.log(hero1.getName());
// console.log(hero.getName());

const path = require("node:path");
console.log(__filename, __dirname)
console.log(path.format(path.parse(__filename)));
console.log(path.extname(__filename));
console.log(path.basename(__filename));

const EventEmitter = require("node:events");
const emitter = new EventEmitter();
emitter.on("click", () => console.log("clicked"));
emitter.on("click", (a) => console.log("second function " + a));
emitter.emit("click");
emitter.emit("click", "test");

const superhero = require("./add.js").superhero;
superhero.on("hero", (data1, data2) => console.log(data1, data2));
superhero.setName("test");

const buffer = new Buffer.from("hello");
console.log(buffer);
console.log(buffer.toString());
buffer.write("dharani");
console.log(buffer.toString());

const fs = require("node:fs");

const text = fs.readFileSync("./text.txt", "utf-8");
// console.log(text);

setTimeout(() => {
    console.log('timer');
}, 0);
fs.readFile("./text.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

// fs.writeFileSync("./text1.txt", "text test");

// fs.writeFile("./text1.txt", " hello world", { flag: "a" }, (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("File updated");
//   }
// });

// const readableStream = fs.createReadStream("./text.txt", {
//   encoding: "utf-8",
//   highWaterMark: 1,
// });

// const writableStream = fs.createWriteStream("./text1.txt");

// readableStream.on('data', (chunk) => {
//     console.log(chunk);
//     writableStream.write(chunk);
// })

// const zlip = require("node:zlib");

// readableStream.pipe(writableStream);
// const gzib = zlip.createGzip();

// readableStream.pipe(gzib).pipe(fs.WriteStream("./text1.txt.gz"));


