var fs = require('fs');

module.exports.createEmptyFile = function(path){
  fs.writeFile(path, '', function(error){
    if (error){ return console.error(error) }
  })
}

/**
 * Check if a directory contains a specified file extension
 * @param  {string} path A string of the path
 * @param  {string} ext  A string of the extension, ex. '.svg'
 * @return {boolean}
 */
module.exports.checkDirectoryForExt = function (path, ext){
  files = fs.readdirSync(path);
  return files.some(function(file){
    return file.substr(- ext.length) === ext;
  })
}
