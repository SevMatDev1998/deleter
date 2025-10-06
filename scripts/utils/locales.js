const fs = require("fs");
const path = require("path");
const { distDir, localesDir } = require("../constants/directions");

const compileLocales = () => {
  try {
    const routesLocale = (localeName) => ({
      "home": `/${localeName !== "en" ? `${localeName}/` : ""}`,
      // "expert": `/${localeName !== "en" ? `${localeName}/` : ""}expert`,
      // "specialists": `/${localeName !== "en" ? `${localeName}/` : ""}specialists`,
      // "customers": `/${localeName !== "en" ? `${localeName}/` : ""}customers`,
    });

    ["index",
      //  "expert", "specialists", "customers"
    ].forEach((page) => {
      const templatePath = path.join(__dirname, "../../src", `${page}.html`);

      if (!fs.existsSync(templatePath)) {
        console.warn(`⚠️ Template not found: ${templatePath}, skipping...`);
        return;
      }

      const template = fs.readFileSync(templatePath, "utf-8");
      const localeFiles = fs.readdirSync(localesDir);

      const getNestedValue = (obj, key) => {
        return key.split(".").reduce((res, part) => {
          if (res && res.hasOwnProperty(part)) {
            return res[part];
          }
          return undefined;
        }, obj);
      };

      for (const file of localeFiles) {
        const localeName = path.basename(file, ".json");
        const locale = JSON.parse(
          fs.readFileSync(path.join(localesDir, file), "utf-8")
        );

        const output = template.replace(/<%(.+?)%>/g, (_, key) => {
          const trimmedKey = key.trim();
          let value;
          if (trimmedKey.includes("routes")) {
            value = getNestedValue({ routes: routesLocale(localeName) }, trimmedKey);
          } else {
            value = getNestedValue(locale, trimmedKey);
          }
          return value !== undefined ? value : `[${trimmedKey}]`;
        });

        // 💡 Определяем, куда сохранять
        let localeOutputDir;
        if (localeName === "en") {
          localeOutputDir = path.join(distDir, page === "index" ? "" : page);
        } else {
          localeOutputDir = path.join(
            distDir,
            localeName,
            page === "index" ? "" : page
          );
        }

        fs.mkdirSync(localeOutputDir, { recursive: true });
        fs.writeFileSync(path.join(localeOutputDir, "index.html"), output);

        console.log(
          `✅ Built: ${localeName}/${
            page === "index" ? "index" : page + "/index"
          }.html`
        );
      }
    });
  } catch (e) {
    console.error("Error:", e);
  }
};

module.exports = compileLocales;
