const svelte = require("svelte/compiler");
const autoprocessor = require("svelte-preprocess");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const runCommand = async () => {
  // source file paths
  const srcPath = path.join(__dirname, "src");

  // read glob of files in directory
  glob(path.join(srcPath, "**/*.svelte"), {}, (error, files) => {
    // handling error
    if (error) {
      return console.log("Unable to scan directory: " + error);
    }
    // listing all files using forEach
    files.forEach(async (file) => {
      // load file
      const sourceFile = fs.readFileSync(file, "utf-8");
      const distFile = file.replace("/src/", "/dist/");

      // process .svelte file
      if (file.includes(".svelte")) {
        // run autopreprocessor
        await ParseSvelte(sourceFile, distFile);
      }
      // copy other files
      else {
        // copy static files
        fs.copyFileSync(file, distFile);
      }
    });
  });
};

const ParseSvelte = async (source, destination) => {
  await svelte
    .preprocess(source, autoprocessor(), {
      filename: path.basename(destination),
    })
    .then((item) => {
      // create directory and file
      fs.mkdirSync(path.dirname(destination), {
        recursive: true,
      });
      // write compiled code to dist file
      fs.writeFileSync(destination, item.code);
    })
    .catch((error) => {
      console.error(error.message);
    });
};
runCommand();
