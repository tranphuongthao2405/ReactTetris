import React from "react";
import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";

// with display screen with cells
const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
