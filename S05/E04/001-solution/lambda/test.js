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

const { handler } = require('.');

const testHandler = async () => {
  console.log('in test handler');

  try {
    console.log('before try');
    const result = await handler(null);
    console.log('testHandler', result);
  } catch (err) {
    console.log('err');
    console.log(err);
  }
};
