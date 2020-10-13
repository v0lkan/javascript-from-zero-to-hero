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

  // #region constants and configuration

  const COLOR_APPLE = '#ec6f7c';
  const COLOR_SNAKE = '#c0d571';
  const KEY_UP = 38;
  const KEY_DOWN = 40;
  const KEY_LEFT = 37;
  const KEY_RIGHT = 39;
  const KEY_LEFT_ALT = 65;
  const KEY_RIGHT_ALT = 68;
  const KEY_UP_ALT = 87;
  const KEY_DOWN_ALT = 83;

  const framesPerIteration = 8;
  const gridWidth = 16;
  const gridHeight = 16;
  const canvasWidth = 400;
  const canvasHeight = 400;
  const rows = canvasHeight / gridHeight;
  const cols = canvasWidth / gridWidth;
  const gridGap = 1;

  // #endregion

  // #region utilities

  const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  // #endregion

  // #region board helpers

  const randomRow = () => randomInt(0, rows);
  const randomCol = () => randomInt(0, cols);
  const clearCanvas = () => context.clearRect(0, 0, canvasWidth, canvasHeight);

  // #endregion

  // #region physics

  const checkCollision = (snakeCell, apple) =>
    snakeCell.x === apple.x && snakeCell.y === apple.y;

  // #endregion

  // #region rule engine

  const verifyGameEnd = (cellIndex, snake, apple) => {
    for (let i = cellIndex + 1; i < snake.cells.length; i++) {
      const cell = snake.cells[cellIndex];
      const cellToCheck = snake.cells[i];

      const shouldReset = cell.x === cellToCheck.x && cell.y === cellToCheck.y;

      if (shouldReset) {
        snake.reset();
        apple.reset();

        break;
      }
    }
  };

  // #endregion

  // #region apple

  const apple = {
    init() {
      this.x = randomCol() * gridWidth;
      this.y = randomRow() * gridHeight;
    },
    reset() {
      this.init();
    },
    render() {
      context.fillStyle = COLOR_APPLE;
      context.fillRect(
        this.x,
        this.y,
        gridWidth - gridGap,
        gridHeight - gridGap
      );
    }
  };
  apple.init();

  // #endregion

  // #region snake

  const snake = {
    init() {
      this.x = 10 * gridWidth;
      this.y = 10 * gridHeight;
      this.cells = [];
      this.maxCells = 4;
      this.velocity = {};
      this.velocity.dx = gridWidth;
      this.velocity.dy = 0;
    },
    reset() {
      this.init();
    },
    move() {
      this.x += this.velocity.dx;
      this.y += this.velocity.dy;

      if (this.x >= canvas.width) {
        this.x = 0;
      }
      if (this.x < 0) {
        this.x = canvas.width - gridWidth;
      }
      if (this.y >= canvas.height) {
        this.y = 0;
      }
      if (this.y < 0) {
        this.y = canvas.height - gridHeight;
      }

      this.cells.unshift({x: this.x, y: this.y});
      if (this.cells.length > this.maxCells) {
        this.cells.pop();
      }
    },
    orientLeft() {
      if (this.velocity.dx !== 0) {
        return;
      }
      this.velocity.dx = -gridWidth;
      this.velocity.dy = 0;
    },
    orientRight() {
      if (this.velocity.dx !== 0) {
        return;
      }
      this.velocity.dx = gridWidth;
      this.velocity.dy = 0;
    },
    orientTop() {
      if (this.velocity.dy !== 0) {
        return;
      }
      this.velocity.dx = 0;
      this.velocity.dy = -gridWidth;
    },
    orientBottom() {
      if (this.velocity.dy !== 0) {
        return;
      }
      this.velocity.dx = 0;
      this.velocity.dy = gridWidth;
    },
    render() {
      context.fillStyle = COLOR_SNAKE;
      this.cells.forEach((cell, index) => {
        context.fillRect(
          cell.x,
          cell.y,
          gridWidth - gridGap,
          gridHeight - gridGap
        );

        if (checkCollision(cell, apple)) {
          this.maxCells++;

          apple.x = randomCol() * gridWidth;
          apple.y = randomRow() * gridHeight;
        }

        verifyGameEnd(index, snake, apple);
      });
    }
  };
  snake.init();

  // #endregion

  // #region event handlers

  const listen = () => {
    document.addEventListener('keydown', evt => {
      switch (evt.code) {
        case KEY_DOWN:
          snake.orientBottom();
          break;
        case KEY_DOWN_ALT:
          snake.orientBottom();
          break;
        case KEY_UP:
          snake.orientTop();
          break;
        case KEY_UP_ALT:
          snake.orientTop();
          break;
        case KEY_RIGHT:
          snake.orientRight();
          break;
        case KEY_RIGHT_ALT:
          snake.orientRight();
          break;
        case KEY_LEFT:
          snake.orientLeft();
          break;
        case KEY_LEFT_ALT:
          snake.orientLeft();
          break;
      }
    });
  };

  // #endregion

  // #region game loop

  let counter = 0;
  const loop = () => {
    window.requestAnimationFrame(loop);

    if (++counter < framesPerIteration) {
      return;
    }
    counter = 0;

    clearCanvas();

    apple.render();

    snake.move();
    snake.render();
  };

  // #endregion

  // #region entry point

  loop();
  listen();

  // #endregion
}
