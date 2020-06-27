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

const VTT_ARROW = "-->";
const VTT_HEADER = "WEBVTT";

const newLineMatcher = /\r\n|\n|\r/;
const beginAuthorTagMatcher = /<v[^/]*>/g;
const endAuthorTagMatcher = /<\/v>/g;
const numericLineMatcher = /^\d*$/;

const cleanVttContent = (data) =>
  data
    .split(newLineMatcher)
    .filter((line) => !!line)
    .filter((line) => line.indexOf(VTT_ARROW) === -1)
    .filter((line) => line.indexOf(VTT_HEADER) === -1)
    .filter((line) => !numericLineMatcher.test(line))
    .join("\n")
    .replace(beginAuthorTagMatcher, "")
    .replace(endAuthorTagMatcher, "");

module.exports = {
  cleanVttContent,
};
