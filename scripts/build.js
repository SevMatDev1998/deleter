const fse = require("fs-extra");

const compileLocales = require("./utils/locales");
const compileBundle = require("./utils/bundle");
const compileAssets = require("./utils/assets");
const compileSCSS = require("./utils/scss");
const { distDir } = require("./constants/directions");

const cleanDist = () => {
  fse.removeSync(distDir);
  fse.mkdirSync(distDir);
  console.log("🧹 Cleaned dist/");
};

const build = async () => {
  cleanDist();
  compileSCSS();
  compileAssets();
  await compileBundle();
  compileLocales();
  console.log("✅ Build complete");
};

void build();

module.exports = build;
