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
  path: '/webhook/cs/your-secret-key-here',
  method: 'POST'
};

exports.httpsOptions = httpsOptions;
