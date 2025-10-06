const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const { srcDir, distDir } = require("../constants/directions");

const copyStaticAssets = () => {
  const assets = ["img", "fonts", "icons", "lib"];
  assets.forEach((folder) => {
    const from = path.join(srcDir, "assets", folder);
    const to = path.join(distDir, "assets", folder);
    if (fs.existsSync(from)) {
      fse.copySync(from, to);
      console.log(`📁 Copied ${folder}/`);
    }
  });
  const from = path.join(srcDir, "public");
  const to = path.join(distDir);
  if (fs.existsSync(from)) {
    fse.copySync(from, to);
    console.log(`📁 Copied`);
  }
};

module.exports = copyStaticAssets;
