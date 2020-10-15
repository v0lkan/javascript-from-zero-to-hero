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
  // #region DOM

  const canvas = document.getElementById('game');
  const context = canvas.getContext('2d');

  // #endregion

  // #region game loop

  let counter = 0;
  const loop = () => {
    window.requestAnimationFrame(loop);

//    if (++counter < framesPerIteration) {
//      return;
//    }
    counter = 0;

//    clearCanvas();

//    apple.render();

//    snake.move();
//    snake.render();
  };

  // #endregion

  // #region entry point

  loop();
//  listen();

  // #endregion
}
