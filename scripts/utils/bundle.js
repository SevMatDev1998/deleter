const esbuild = require("esbuild");

const bundleJS = async () => {
  const builds = [
    {
      entry: "src/assets/js/app.js",
      outfile: "dist/assets/js/app.js",
      name: "App"
    },
    {
      entry: "src/assets/js/preload.js",
      outfile: "dist/assets/js/preload.js",
      name: "Preload"
    },
    {
      entry: "src/assets/js/prerender.js",
      outfile: "dist/assets/js/prerender.js",
      name: "Prerender"
    }
  ];

  for (const { entry, outfile, name } of builds) {
    try {
      await esbuild.build({
        entryPoints: [entry],
        bundle: true,
        minify: true,
        outfile,
        format: "iife",
        sourcemap: true
      });
      console.log(`✅ ${name} JS built successfully.`);
    } catch (e) {
      console.error(`❌ ${name} build failed:`, e);
      process.exit(1);
    }
  }
};

module.exports = bundleJS;
