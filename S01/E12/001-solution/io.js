/*
 *  \
 *  \\,
 *   \\\,^,.,,.                    “Zero to Hero”
 *   ,;7~((\))`;;,,               <zerotohero.dev>
 *   ,(@') ;)`))\;;',    stay up to date, be curious: learn
 *    )  . ),((  ))\;,
 *   /;`,,/7),)) )) )\,,
 *  (& )`   (,((,((;( ))\,
 */

const { join } = require("path");
const { readFile, writeFile, readdir } = require("fs");

const { cleanVttContent } = require("./format");

const DATA_DIR = join(__dirname, "data");
const DIST_DIR = join(__dirname, "dist");

const EXTENSION_VTT = ".vtt";
const EXTENSION_MD = ".md";

const handleFileCleanup = (resolve, reject, { file }) => (err, data) => {
  if (err) {
    console.error(err);
    reject({ reason: "Error handling file cleanup!" });

    return;
  }

  writeFile(
    join(DIST_DIR, file.replace(EXTENSION_VTT, EXTENSION_MD)),
    cleanVttContent(data),
    { encoding: "utf-8" },
    (err) => {
      if (err) {
        console.error(err);
        reject({ reason: "Error writing file." });

        return;
      }

      resolve("OK");
    }
  );
};

const cleanupFiles = (files) =>
  Promise.all(
    files.map(
      (file) =>
        new Promise((resolve, reject) =>
          readFile(
            join(DATA_DIR, file),
            { encoding: "utf-8" },
            handleFileCleanup(resolve, reject, { file })
          )
        )
    )
  );

const getTranscriptFiles = async () =>
  new Promise((resolve, reject) =>
    readdir(DATA_DIR, (err, items) => {
      if (err) {
        console.error(err);
        reject("getTranscriptFiles: Error reading the data folder.");

        return;
      }

      resolve(
        items
          .filter((item) => item !== ".keep")
          .filter((item) => item !== ".DS_Store")
      );
    })
  );

module.exports = {
  getTranscriptFiles,
  cleanupFiles,
};
