import { loadEnv } from '../src/index';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(dirname(import.meta.url));

console.log(loadEnv({ cwd: __dirname, envFile: '.env', injectEnv: false }));
console.log('process env age: ', process.env['age']);

console.log(loadEnv({ cwd: __dirname, envFile: '.env.local', injectEnv: false }));

console.log(loadEnv({ cwd: __dirname, envFile: '.env' }));

console.log('process env age: ', process.env['age']);
