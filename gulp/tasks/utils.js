const fs = require("fs");

module.exports.createEmptyFile = path => {
  fs.writeFile(path, "", error => {
    if (error) {
      return console.error(error);
    }
  });
};

/**
 * Check if a directory contains a specified file extension
 * @param  {string} path A string of the path
 * @param  {string} ext  A string of the extension, ex. '.svg'
 * @return {boolean}
 */
module.exports.checkDirectoryForExt = (path, ext) => {
  files = fs.readdirSync(path);
  return files.some(file => {
    return file.substr(-ext.length) === ext;
  });
};
