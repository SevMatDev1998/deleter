const path = require("path");

const srcDir = path.join(__dirname, '../../src');
const distDir = path.join(__dirname, '../../dist');
const localesDir = path.join(__dirname, "../../locales");

module.exports = {
  srcDir,
  distDir,
  localesDir
}
