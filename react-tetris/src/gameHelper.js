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
