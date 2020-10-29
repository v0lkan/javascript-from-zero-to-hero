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

import express from 'express';
const app = express();

app.get('/', (req, res) => {
  void req;
  res.status(200).end('Hello World, Hello stars, Hello Universe!');
});

const PORT = 8888;

app.listen(PORT, () => console.log(`App up and running on port ${PORT}.`));
