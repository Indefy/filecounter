import {readdir} from 'fs/promises';

async function countFilesInDirectory(dirPath) {
  try {
    const files = await readdir(dirPath);

    console.log(files);

    return files.length;
  } catch (err) {
    console.log(err);
  }
}

const pathToDirectory = './node_modules/';

countFilesInDirectory(pathToDirectory).then(count => {
  console.log(count);
});