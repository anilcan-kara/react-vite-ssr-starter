import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

console.log(`import.meta.url`, import.meta.url);

console.log(`fileURLToPath(import.meta.url)`, fileURLToPath(import.meta.url));

console.log(`dirname(fileURLToPath(import.meta.url))`, dirname(fileURLToPath(import.meta.url)));

const list = fs.readdirSync('.')

console.log(`list.length`, list.length);
console.log(`list`, list);

const list2 = fs.readdirSync('api')

console.log(`list2.length`, list2.length);
console.log(`list2`, list2);

const root = dirname(fileURLToPath(import.meta.url)).split('/').slice(0, -1).join('/')

console.log(`root`, root);

const list3 = fs.readdirSync(root)

console.log(`list3.length`, list3.length);
console.log(`list3`, list3);

const list4 = fs.readdirSync(`${root}/dist`)

console.log(`list4.length`, list4.length);
console.log(`list4`, list4);

export default { root }
