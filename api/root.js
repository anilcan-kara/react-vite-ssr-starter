import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

console.log(`import.meta.url`, import.meta.url);

console.log(`fileURLToPath(import.meta.url)`, fileURLToPath(import.meta.url));

console.log(`dirname(fileURLToPath(import.meta.url))`, dirname(fileURLToPath(import.meta.url)));

export const root = dirname(fileURLToPath(import.meta.url)).split('/').slice(0, -1).join('/')

console.log(`root`, root);

scandir(root, (err, files) => {
  if (err) throw err
  console.log(files)
})

function scandir(dir, callback) {
  var results = []
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err)
    var pending = list.length
    if (!pending) return callback(null, results)
    list.forEach(function (file) {
      file = dir + '/' + file
      results.push(file)
      if (!--pending) callback(null, results)
    })
  })
}