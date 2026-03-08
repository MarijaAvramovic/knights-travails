import { knightMovesPossible } from './knight-moves.js';


function knightPath(start, goal) {
  if (start[0] === goal[0] && start[1] === goal[1]) {
    return [start]; 
  }

  const layerBreadth = [];                
  const visited = new Set();        
  const mapFromWhere = new Map();         

 
  const startStr = start.join(',');    
  layerBreadth.push(start);
  visited.add(startStr);
  mapFromWhere.set(startStr, null);

  let found = false;

  while (layerBreadth.length > 0) {
    const current = layerBreadth.shift();
    const currStr = current.join(',');

    if (current[0] === goal[0] && current[1] === goal[1]) {
      found = true;
      break;
    }

    for (const moveNode of knightMovesPossible(current[0], current[1])) {
      const moveNodeStr = moveNode.join(',');

      if (!visited.has(moveNodeStr)) {
        visited.add(moveNodeStr);
        layerBreadth.push(moveNode);
        mapFromWhere.set(moveNodeStr, current);   
      }
    }
  }

  if (!found) {
    return null;  
  }

  
  const path = [];
  let myMove = goal;

  while (myMove !== null) {
    path.push(myMove);
    const key = myMove.join(',');
    myMove = mapFromWhere.get(key);
  }

  path.reverse();    

  return path;
}