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
    shoot() {
      console.log('kaboom!');
    }
  }

  class Spaceship extends GameEntity {
  }

  class AlienSpaceship extends Spaceship {
  }

  const zorg = new AlienSpaceship();

  console.log(zorg instanceof AlienSpaceship); // true
  console.log(zorg instanceof Spaceship); // true
  console.log(zorg instanceof GameEntity); // true
  console.log(zorg instanceof Object); // true

  zorg.shoot(); // kaboom!
}
