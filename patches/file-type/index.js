"use strict";

let fileTypeModule;

const loadFileType = () => {
  if (!fileTypeModule) {
    fileTypeModule = import("file-type-esm");
  }

  return fileTypeModule;
};

module.exports = {
  fromBuffer: (...args) => loadFileType().then(({fileTypeFromBuffer}) => fileTypeFromBuffer(...args)),
  fromFile: (...args) => loadFileType().then(({fileTypeFromFile}) => fileTypeFromFile(...args)),
  fromStream: (...args) => loadFileType().then(({fileTypeFromStream}) => fileTypeFromStream(...args)),
  fromTokenizer: (...args) => loadFileType().then(({fileTypeFromTokenizer}) => fileTypeFromTokenizer(...args)),
  fromBlob: (...args) => loadFileType().then(({fileTypeFromBlob}) => fileTypeFromBlob(...args))
};
