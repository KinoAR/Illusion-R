const fs = require("fs");
const path = require("path");
const R = require("ramda");
const distPath = path.resolve(__dirname, "dist");
const destinationPath = path.resolve(__dirname, "game");
fs.readdir(distPath, 'utf8', (err, files) => {
  files.forEach(file => {
    if (fs.statSync(`${distPath}/${file}`).isDirectory()) {
      const newDist = `${distPath}/${file}`;
      const newDestination = `${destinationPath}/${file}`;
      copyFiles(fs.readdirSync(newDist,'utf8'), newDist, newDestination);
    } else {
      fs.copyFileSync(`${distPath}/${file}`, `${destinationPath}/${file}`);
      console.log(`Copied: ${file} to ${destinationPath}`);
    }
  })
});

function copyFiles(files, distPath, destinationPath) {
  files.forEach(file => {
    const distFile = `${distPath}/${file}`;
    if (fs.statSync(distFile).isFile()) {
      fs.copyFileSync(`${distPath}/${file}`, `${destinationPath}/${file}`);
      console.log(`Copied: ${file} to ${destinationPath}`);
    } else {
      if (fs.statSync(distFile).isDirectory()) {
        const newDist = `${distPath}/${file}`;
        const newDestination = `${destinationPath}/${file}`;
        copyFiles(fs.readdirSync(newDist, 'utf8'), newDist, newDestination);
      }
    }
  })
}