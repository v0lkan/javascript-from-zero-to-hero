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

// 🦄
//
// The codes here are snippets; they will not run by themselves
// since part of the code (like the `Spaceship()` constructor, and also
// the `GameEntity()` constructor) is missing.
//
// You can copy them from earlier section, paste into the relevant
// code blocks to make them work.

{
  class AlienSpaceship extends Spaceship {
    constructor(name, cannons) {
      super(name, 1000);
      this.cannons = cannons;
    }
    initiateDeathStar() {
      console.log('Death Star initiated!');
    }
  }
}

{
  const ship = new SpaceShip('Andromeda', 42);
  console.log(ship.name); // The Great Andromeda

  ship.shoot(); // logs: "Kaboom!"

  ship.initiateDeathStar();
  // ^ ERR: ship.initiateDeathStar is not a function.
}

{
  const generic = new GameEntity('Enemy');
  // generic.__proto__ <= GameEntity.prototype

  const zorg = new AlienSpaceship('Zorg', 4);
  // zorg.__proto__ <= AlienSpaceship.prototype

  const ship = new Spaceship('Andromeda', 42);
  // ship.__proto__ <= Spaceship.prototype

  const protoss = new AlienSpaceship('Adun Jolidas!', 22);
  // protos.__proto__ <= AlienSpaceship.prototype
}

{
  const ahsoka = new Jedi('Ahsoka Tano');
  console.log(ahsoka.__proto__ === Jedi.prototype)
  console.log(Jedi.prototype.constructor === Jedi)
}
