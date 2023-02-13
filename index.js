const { exec } = require("child_process");
const args = require('yargs').argv;

console.log(args);

exec(`echo 'test'`, (e,s,d) => {
  console.log(s)
  console.log('ENV', process.env)
});


