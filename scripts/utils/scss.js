const path = require("path");
const { execSync } = require("child_process");
const fse = require("fs-extra");
const { srcDir, distDir } = require("../constants/directions");

const compileSCSS = () => {
  const files = ["main", "preload", "index", "expert", "specialists", "customers"];

  const compile = (file) => {
    const input = path.join(srcDir, `assets/css/${file}.scss`);
    const output = path.join(distDir, `assets/css/${file}.min.css`);
    fse.ensureDirSync(path.dirname(output));
    execSync(`sass ${input} ${output} --style=compressed --no-source-map`);
    console.log(`🎨 ${file} SCSS compiled`);
  };

  files.forEach(compile);
};

module.exports = compileSCSS;
