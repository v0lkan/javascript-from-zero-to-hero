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

const httpsOptions = {
  hostname: 'app.buddy.works',
  port: 443,
  path: process.env.WEBHOOK_PATH,
  method: 'POST'
};

exports.httpsOptions = httpsOptions;
