import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

console.log(`import.meta.url`, import.meta.url);

console.log(`fileURLToPath(import.meta.url)`, fileURLToPath(import.meta.url));

console.log(`dirname(fileURLToPath(import.meta.url))`, dirname(fileURLToPath(import.meta.url)));

const currentDir = dirname(fileURLToPath(import.meta.url))
const parentDir = currentDir.split('/').slice(0, -1).join('/')

async function scanDir(dir, excludeFiles = []) {
  const files = await fs.promises.readdir(dir);

  let result = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await fs.promises.lstat(filePath);

    if (stats.isDirectory() && !excludeFiles.includes(file)) {
      result = result.concat(await scanDir(filePath, excludeFiles));
    } else if (stats.isFile() && !excludeFiles.includes(file)) {
      result.push(filePath);
    }
  }

  return result;
}

const list = fs.existsSync('.') && fs.readdirSync('.') || []

console.log(`list.length`, list.length);
console.log(`list`, list);

const list2 = fs.existsSync('api') && fs.readdirSync('api') || []

console.log(`list2.length`, list2.length);
console.log(`list2`, list2);

console.log(`currentDir`, currentDir);

const list3 = fs.existsSync(currentDir) && fs.readdirSync(currentDir) || []

console.log(`list3.length`, list3.length);
console.log(`list3`, list3);

const list4 = fs.existsSync(`${currentDir}/dist`) && fs.readdirSync(`${currentDir}/dist`) || []

console.log(`list4.length`, list4.length);
console.log(`list4`, list4);

console.log(`parentDir`, parentDir);

const list5 = fs.existsSync(parentDir) && await scanDir(parentDir, ['node_modules', '.git']) || []

console.log(`list5.length`, list5.length);
console.log(`list5`, list5);

const list6 = fs.existsSync(`${parentDir}/dist`) && fs.readdirSync(`${parentDir}/dist`) || []

console.log(`list6.length`, list6.length);
console.log(`list6`, list6);

const list7 = fs.existsSync(`${parentDir}/dist/server`) && fs.readdirSync(`${parentDir}/dist/server`) || []

console.log(`list7.length`, list7.length);
console.log(`list7`, list7);

const list8 = fs.existsSync(`${parentDir}/dist/client`) && fs.readdirSync(`${parentDir}/dist/client`) || []

console.log(`list8.length`, list8.length);
console.log(`list8`, list8);

export const upper = parentDir

export const root = currentDir
