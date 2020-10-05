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

{
  console.log(typeof true); // boolean
  console.log(typeof new Boolean(true)) // object
  console.log(typeof Boolean(true)) // boolean
}

{
  console.log(typeof (new Boolean(true)).valueOf()) // boolean
  console.log((new Boolean(true).valueOf())) // true
}

{
  const phrase = 'Through the source, things, you’ll see.';
  const phrase.subPhrase = 'Other places';
  console.log(phrase.subPhrase); // undefined
  console.log(phrase.length); // 38
}

{/*
  console.log(phrase.length);
  // below is pseudocode
  let p := new String(phrase); // boxing
  let tmp := p.length;
  console.log(tmp); // unboxing
*/}

{
  String.prototype.itself = function() {return this;};

  let phrase = 'A Jedi must have the deepest commitment.';
  console.log(typeof phrase); // 'string'
  let boxedPhrase = new String(phrase);
  console.log(typeof boxedPhrase); // 'object'
}

{
  'Anakin Skywalker' // ✅
  new String('Anakin Skywalker') // ❌

  42 // ✅
  new Number(42) // ❌

  true // ✅
  new Boolean(true) // ❌

  { resistance: 'futile' } // ✅
  new Object({ resistance: 'futile' }) // ❌

    ['🦄', '⚡'] // ✅
  new Array('🦄', '⚡') // ❌
}
