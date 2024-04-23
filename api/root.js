import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

console.log(`import.meta.url`, import.meta.url);

console.log(`fileURLToPath(import.meta.url)`, fileURLToPath(import.meta.url));

console.log(`dirname(fileURLToPath(import.meta.url))`, dirname(fileURLToPath(import.meta.url)));

const list = fs.readdirSync('.')

console.log(`list.length`, list.length);
console.log(`list`, list);

export const root = dirname(fileURLToPath(import.meta.url)).split('/').slice(0, -1).join('/')

console.log(`root`, root);