import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

// Start game button
const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
