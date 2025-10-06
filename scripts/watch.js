const path = require("path");
const chokidar = require("chokidar");

const compileLocales = require("./utils/locales.js");
const compileAssets = require("./utils/assets.js");
const compileBundle = require("./utils/bundle.js");
const compileScss = require("./utils/scss.js");
const { srcDir, localesDir } = require("./constants/directions");

const watchFiles = () => {
  const ext = [".js", ".json", ".scss", ".html"];

  const watcher = chokidar.watch([srcDir, localesDir], {
    ignored: (file, stats) => {
      return stats?.isFile() && !ext.some((e) => file.endsWith(e));
    },
  });

  watcher.on("change", (filePath) => {
    console.log(`📦 Changed: ${filePath}`);

    const isScss = filePath.endsWith(".scss");
    const isJs = filePath.endsWith(".js");
    const isHtml = filePath.endsWith(".html");
    const isLocal = filePath.endsWith(".json");

    if (isScss) {
      compileScss();
      console.log("🎨 SCSS changed, recompiling...");
    }

    if (isJs) {
      void compileBundle();
      console.log("📦 JS changed, recompiling...");
    }

    if (isHtml || isLocal) {
      compileLocales();
      console.log("📝 HTML template changed, recompiling...");
    }

    if (!isScss && !isJs && !isHtml && !isLocal) {
      compileAssets();
      console.log("📝 Add new assets, recompiling...");
    }
  });

  console.log("👀 Watching for changes in:");
  console.log("   • assets/css/*.scss");
  console.log("   • assets/js/*.js");
  console.log("   • locales/*.json");
  console.log("   • index.html, expert.html, spesialist.html");
};

watchFiles();
