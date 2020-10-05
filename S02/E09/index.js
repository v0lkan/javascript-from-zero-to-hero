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
  class GameEntity {
    constructor(name) {
      this.name = name;
    }
    shoot() {
      const myName = this.name || 'Unknown';
      console.log(`[${myName}] Kaboom!`);
    }
  }

  class Spaceship extends GameEntity {}
  class AlienSpaceship extends GameEntity{}

  const generic = new GameEntity('Enemy');
  generic.shoot();

  const zorg = new AlienSpaceship('zorg');
  zorg.shoot();
}

{
  class GameEntity {
    constructor(name) {
      this.name = name;
    }
    shoot() {
      const myName = this.name || 'Unknown';
      console.log(`[${myName}] Kaboom!`);
    }
  }

  class Spaceship extends GameEntity {
    constructor(name) {
      super(name);
    }
  }
  class AlienSpaceship extends GameEntity{
    constructor(name) {
      super(name);
    }
  }

  const generic = new GameEntity('Enemy');
  generic.shoot();

  const zorg = new AlienSpaceship('zorg');
  zorg.shoot();
}

{
  class GameEntity {
    constructor(name) {
      this.name = name;
    }
    shoot() {
      const myName = this.name || 'Unknown';
      console.log(`[${myName}] Kaboom!`);
    }
  }

  class Spaceship extends GameEntity {
    constructor(name, speed) {
      super(name);
      this.speed = speed;
    }
  }
  class AlienSpaceship extends GameEntity{
    constructor(name, cannons) {
      super(name, 1000);
      this.cannons = cannons;
    }
  }

  const generic = new GameEntity('Enemy');
  generic.shoot();

  const zorg = new AlienSpaceship('zorg', 4);
  zorg.shoot();

  console.log('Zorg has', zorg.cannons, 'cannons.');
  console.log('Zorg is', zorg.speed, 'space-miles fast!');

  // Output:
  //
  // [Enemy]: Kaboom!
  // [Zorg]: Kaboom!
  // Zorg has 4 cannons.
  // Zorg is 1000 space-miles fast!
}
