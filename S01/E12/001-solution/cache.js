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

const { cpus } = require("os");
const CPU_COUNT = cpus().length;

const { cleanupFiles } = require("./io");

const store = [];

const empty = () => store.length === 0;

const getNextBatch = () => store.splice(store.length - CPU_COUNT);

const consume = async () =>
  Promise.resolve(
    empty()
      ? {
          success: true,
          message: "Store consumed successfully.",
        }
      : cleanupFiles(getNextBatch()).then(consume)
  );

const init = (items) => items.forEach((item) => store.push(item));

module.exports = {
  init,
  consume,
};
