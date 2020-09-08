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
  const phraseOne = 'These are not the droids you are looking for.';
  const phraseTwo = 'These are not the droids you are looking for.';

  console.log('phraseOne === phraseTwo ::', phraseOne === phraseTwo);
  console.log('type', typeof phraseOne);
}

{
  const url = 'zerotohero.dev';
  console.log('url ::', url);
  console.log('url[0] ::', url[0]);
  url[0] = 'h';
  console.log('url ::', url);
}

{
  const phraseOne = 'These are not the droids you are looking for.';

  // Value assigned to primitive; it will be lost.
  phraseOne.from = 'Star Wars';

  console.log('phraseOne.from ::', phraseOne.from);
}

{
  const urlOne = 'zerotohero.dev';
  let urlTwo = urlOne;
  urlTwo = 'Do. Or do not. There’s no try.';
  console.log('urlTwo ::', urlTwo);
  console.log('urlOne ::', urlOne);
}

{
  const characterOne = { name: 'Darth Vader' };
  const characterTwo = { name: 'Darth Vader' };

  console.log('characterOne === characterTwo ::', characterOne === characterTwo);
  console.log('comparing names instead ::',
    characterOne.name === characterTwo.name
  );
  console.log('type', typeof characterOne);
}

{
  const chars = ['z', 'e', 'r', 'o', 't', 'o', 'h', 'e', 'r', 'o'];
  console.log('chars', chars);
  chars[0] = 'h';
  console.log('chars', chars);
}

{
  const characterOne = { name: 'Darth Vader' };

  characterOne.from = 'Star Wars';

  console.log('characterOne.from ::', characterOne.from);
}

{
  const characterOne = { name: 'Darth Vader' };
  const characterTwo = characterOne;
  characterTwo.name = 'Anakin Skywalker';
  console.log('characterTwo ::', characterTwo);
  console.log('characterOne ::', characterOne);
}

/*
## Nitpicks

1)

* `primitive.propertyName = 'new value';` will not work
  * because primitives are **immutable**.
* `obj.propertyName = 'new value'` will work
  * because you can **mutate** objects.

2)

* The value of a primitive type is its actual value.
  * That’s why when we compare two primitives with the same values
    using `===`, we get `true`.
* The value of a reference type is reference (i.e., a “memory address”).
  * That’s why even if two reference types have same “shapes” they will have
  different references (*i.e. addresses*) in memory, and when we compare
  them with `===` we will get `false`.

3)

* Both **primitive types** and **reference types** are actually compared
  (*and passed*) “by value”.
  * The value of a **primitive type** is its **actual value**.
  * Whereas the value of a **reference type** is its **memory addresss**.
* But “for simplicity” we say that “primitives are compared by value” and
  “reference types are compared by reference”.

 */