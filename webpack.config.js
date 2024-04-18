// import path from 'path';
// import { fileURLToPath } from 'url'
// const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
exports.config = {
  entry: './app.js',
  target: "node",
  output: {
    path: path.resolve(__dirnameNew, 'dist'),
    filename: 'bundle.js',
  },
};