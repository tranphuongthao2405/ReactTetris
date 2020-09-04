export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    // inline function
    // for each row in 20 rows
    // create a new cell array
    // fill every cell with "clear" property
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. check if whether on an tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. check that movement is inside game area height
          // not go through the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. check that movement is inside game area width
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. check that the cell is moving to the 'clear' position or not
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
