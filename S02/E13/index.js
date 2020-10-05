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
  const phrase = 'You’ll find only what you bring in.';
  const what = 'the meaning of life';
  const templateLiteral = `You’ll find ${what}.`;
  console.log(phrase); // logs: "You’ll find only what you bring in.""
  console.log(templateLiteral); // logs: "You’ll find the meaning of life."
}

{
  const what = 'the meaning of life';
  const whatElse = 'the universe';
  const templateLiteral = `You’ll find ${what} and {whatElse}.`;
  console.log(templateLiteral);
  // logs: "You’ll find the meaning of life and the universe."
}

{
  const what = 'the meaning of life';
  const whatElse = 'the universe';

  const up = (literals, ...items) => {
    console.log(literals);
    console.log(item);
    console.log('- - ');
    return 'hello';
  };

  console.log(up `You’ll find ${what} and {whatElse}.`);
  // logs:
  // literals [ 'You’ll find ', 'and ', '.']
  // items ['the meaning of life', 'the universe']
  // - -
  // hello
}

{
  const what = 'the meaning of life';
  const whatElse = 'the universe';

  const up = (literals, ...items) => {
    return literals.reduce((acc, value, index) => {
      return `${acc}${value}${
        items[index] ? `*${items[index]}*` : ''
      }`;
    }, '');
  };

  console.log(up `You’ll find ${what} and {whatElse}.`);
  // logs:
  // You’ll find *the meaning of life* and *the universe*.

  // Reduction Steps:
  // ''
  // 'You’ll find'
  // 'You’ll find *the meaning of life*'
  // 'You’ll find *the meaning of life* and '
  // 'You’ll find *the meaning of life* and *the universe*'
  // 'You’ll find *the meaning of life* and *the universe*.'
}

{
  const what = { value: 'the meaning of life'};
  const whatElse = { value: 'the universe'};

  const up = (literals, ...items) => {
    return literals.reduce((acc, value, index) => {
      return `${acc}${value}${
        (items[index] && items[index].value) ?
          `🙃${items[index].value}🙂` :
          ''
      }`;
    }, '');
  };

  console.log(up `You’ll find ${what} and {whatElse}.`);
  // logs:
  // You’ll find 🙃the meaning of life🙂 and 🙃the universe🙂.
}

{
  const what = { value: 'the meaning of life',
    fn: (x) => x.toUpperCase() };
  const whatElse = { value: 'the universe',
    fn: (x) => x.toUpperCase() };

  const up = (literals, ...items) => {
    return literals.reduce((acc, value, index) => {
      return `${acc}${value}${
        (items[index] && items[index].value) ?
          `🙃${items[index].fn(items[index].value)}🙂` :
          ''
      }`;
    }, '');
  };

  console.log(up `You’ll find ${what} and {whatElse}.`);
  // logs:
  // You’ll find 🙃THE MEANING OF LIFE🙂 and 🙃THE UNIVERSE🙂.
}
