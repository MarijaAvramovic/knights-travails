// import "./styles.css";

// 1. Funkcija koja vraća sve legalne poteze sa date pozicije
export function knightMovesPossible(x, y) {
  const steps = [
    [1, 2], [1, -2], [-1, 2], [-1, -2],
    [2, 1], [2, -1], [-2, 1], [-2, -1]
  ];

  const moves = [];

  for (const [sx, sy] of steps) {
    const newX = x + sx;
    const newY = y + sy;

    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
      moves.push([newX, newY]);
    }
  }

  return moves;
}
// console.log(knightMovesPossible(0,0));
// console.log(knightMovesPossible(0,0));