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
  function GameEntity() {}
  let game = new GameEntity();
}

{
  function GameEntity() {}

  let game = new GameEntity();

  console.log(game.toString());
  console.log(game.apply);
  console.log(game instanceof GameEntity);
  console.log(game instanceof Object);
  console.log(game instanceof Function);
}

{
  function GameEntity() {}
  GameEntity.prototype.move = function() {console.log('moved');};

  const game = new GameEntity();

  game.move(); // moved

  console.log(game instanceof GameEntity); // true
}

{
  function GameEntity() {}
  GameEntity.prototype = {
    move() {console.log('moved')}
  };

  const game = new GameEntity();

  game.move();

  console.log(game instanceof GameEntity); // false
  console.log(game.constructor === GameEntity); // true
  console.log(game instanceof Object); // tru
}

{
  console.log(Object instanceof Function); // true
  console.log(Object instanceof Object); // true
  console.log(Symbol instanceof Function); // true
  console.log(Date instanceof Function); // true
  console.log(Boolean instanceof Function); // true
  console.log(Function instanceof Function); // true
  console.log(Object.prototype.constructor === Object); // true
  console.log(Symbol.prototype.constructor === Symbol); // true
  console.log(Date.prototype.constructor === Date); // true
  console.log(Boolean.prototype.constructor === Boolean); // true
  console.log(Function.prototype.constructor === Function); // true
}

{
  console.log(Object instanceof Function); // true
  console.log(Object instanceof Object); // true
  console.log(String instanceof String); // false
}

{
  console.log(String instanceof String); // false
  console.log(String.constructor === Function); // true
  console.log(String.prototype.constructor === String); // true
  console.log(String instanceof Function); // true
  console.log(String instanceof Object); // true
}

{
  const str = new String('hello');
  console.log(str instanceof Object); // true
  console.log(str instanceof String);  // true
}
