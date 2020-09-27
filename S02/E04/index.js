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

  console.log('GameEntity.prototype', GameEntity.prototype);
  console.log('GameEntity.prototype.constructor', GameEntity.prototype.constructor);
  console.log(GameEntity.prototype.constructor === GameEntity);
  console.log('call', GameEntity.call);
  console.log('apply', GameEntity.apply);
  console.log(GameEntity.valueOf === Function.prototype.valueOf);
  console.log(Function.prototype.hasOwnProperty('valueOf'));
  console.log(GameEntity.valueOf === Object.prototype.valueOf);
}