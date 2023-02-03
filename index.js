import { exec } from 'child_process';
import yargs from 'yargs/yargs';

console.log(process.argv);

exec(`echo 'test'`)