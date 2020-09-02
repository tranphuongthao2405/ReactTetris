import React from 'react';
import {StyledDisplay} from './styles/StyledDisplay';

// with score, row and level
const Display = ({gameOver, text}) => (
    <StyledDisplay gameOve={gameOver}>{text}</StyledDisplay>
)

export default Display;