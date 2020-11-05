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

const https = require('https');

const { httpsOptions } = require('./config');

exports.handler = async (event) => {
  void event;
  void httpsOptions;

  return new Promise((resolve, reject) => {
    const req = https.request((options, res) => {
      res.on('close', () => {
        resolve('OK');
      });
    });

    req.on('error', (e) => {
      void e;
      reject('FAIL');
    });

    req.end();
  });
};
