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
  GameEntity.prototype.shoot = function() {console.log('kaboom!');};

  function Spaceship() {}
  Spaceship.prototype = new GameEntity();

  function AlienSpaceship() {}
  AlienSpaceship.prototype = new Spaceship();

  const zorg = new AlienSpaceship();

  console.log(zorg instanceof AlienSpaceship); // true
  console.log(zorg instanceof Spaceship); // true
  console.log(zorg instanceof GameEntity); // true
  console.log(zorg instanceof Object); // true
  console.log(zorg instanceof Function) // false
}

{
  function GameEntity() {}
  GameEntity.prototype.shoot = function() {console.log('kaboom!');};

  function Spaceship() {}
  Spaceship.prototype = new GameEntity();
  Spaceship.prototype.constructor = Spaceship;

  function AlienSpaceship() {}
  AlienSpaceship.prototype = new Spaceship();
  AlienSpaceship.prototype.constructor = AlienSpaceship;

  console.log(zorg.constructor); // [Function: AlienSpaceship]
  zorg.shoot(); // kaboom!

  console.log(zorg.__proto__ === AlienSpaceship.prototype); // true
  console.log(zorg.__proto__.__proto__ === Spaceship.prototype); // true
  console.log(zorg.__proto__.__proto__.__proto__ === Object.prototype); // true
}

{
  function GameEntity() {}
  GameEntity.prototype.shoot = function() {console.log('kaboom!');};

  function Spaceship() {}
  Spaceship.prototype = Object.create(GameEntity.prototype);
  Spaceship.prototype.constructor = Spaceship;

  function AlienSpaceship() {}
  AlienSpaceship.prototype = Object.create(Spaceship.prototype);
  AlienSpaceship.prototype.constructor = AlienSpaceship;
}

{
  const test = {hello: 'world'};
  console.log(Object.create(test).__proto__ === test); // true
}