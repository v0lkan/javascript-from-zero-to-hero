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

const { init: initCache, consume: consumeCache } = require("./cache");
const { getTranscriptFiles } = require("./io");

const run = async () => {
  const files = await getTranscriptFiles();

  initCache(files);

  await consumeCache();

  console.log("All done!");
};

run();
