Link https://marijaavramovic.github.io/knights-travails/

I built a JavaScript function called knightMoves that finds the shortest path a knight can take from one square to another on an 8×8 chessboard.

I modeled the board as a graph where each square is a node and every legal knight jump is an edge.

I used BFS to guarantee the shortest path (since every move costs the same).

I generated all possible knight moves from any position (±1±2 and ±2±1 combos), filtered out anything off the board.

While running BFS I kept a visited set to avoid cycles and a parent map to remember how I reached each square.

When I hit the target, I backtracked through the parents to build the full path array, then reversed it so it reads start → finish.

I added basic input validation so it doesn’t explode on invalid coords like [-1,8].
 

 using test jest