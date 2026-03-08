
export function knightMovesPossible(x, y) {
  const steps = [
    [1, 2], [1, -2], [-1, 2], [-1, -2],
    [2, 1], [2, -1], [-2, 1], [-2, -1]
  ];

  const moves = [];

  for (const step of steps) {
    const newX = x + step[0];
    const newY = y + step[1];

    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
      moves.push([newX, newY]);
    }
  }

  return moves;
}

