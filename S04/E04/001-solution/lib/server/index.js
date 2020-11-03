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

// 

import express from 'express';
const app = express();

const randomGreeting = (name) => {
  if (Math.random() < 0.5) {
    return `Hello ${name}!`;
  }

  return `Wazzupp ${name}!`;
};

app.get('/', (req, res) => {
  void req;
  res.status(200).end('Hello World, Hello stars, Hello Universe!');
});

const PORT = 8888;

app.listen(PORT, () =>
  console.log(
    `App up and running on port ${PORT} ${randomGreeting('visitor')}.`
  )
);
