import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

console.log(`import.meta.url`, import.meta.url);

console.log(`fileURLToPath(import.meta.url)`, fileURLToPath(import.meta.url));

console.log(`dirname(fileURLToPath(import.meta.url))`, dirname(fileURLToPath(import.meta.url)));

const currentDir = dirname(fileURLToPath(import.meta.url))
const parentDir = currentDir.split('/').slice(0, -1).join('/')

const recursiveScan = (dir, exclude = []) => {
  const files = fs.readdirSync(dir)
  const subdirs = files.filter((file) => fs.statSync(`${dir}/${file}`).isDirectory())
  return subdirs.reduce((acc, subdir) => {
    const subdirPath = `${dir}/${subdir}`
    if (exclude.includes(subdirPath)) {
      return acc
    }
    return [...acc, ...recursiveScan(subdirPath, exclude)]
  }, files.filter((file) => !exclude.includes(`${dir}/${file}`)))
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

const list5 = fs.existsSync(parentDir) && recursiveScan(parentDir, ['node_modules']) || []

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
