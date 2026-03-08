import "./styles.css";


// console.log(knightMovesPossible(0,0));
// [ [ 1, 2 ], [ 2, 1 ] ]
// console.log(knightMovesPossible(5,6));
// [ [ 6, 4 ], [ 4, 4 ], [ 7, 7 ], [ 7, 5 ], [ 3, 7 ], [ 3, 5 ] ]
 
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

console.log(knightPath([0,0] , [3,3]));

 
function printKnightPath(start, goal) {
  const path = knightPath(start, goal);

  if (!path) {
    console.log("No path.");
    return;
  }

  console.log(`=> The optimal path is ${path.length - 1} steps! Looks like this:`);

  for (let i = 0; i < path.length; i++) {
    console.log(`${i === 0 ? 'START → ' : ''}[${path[i][0]},${path[i][1]}]`);
  }
}
printKnightPath([0,0], [7,7]);

function calculatePath() {
  const startInput = document.getElementById('start').value.trim();
  const goalInput = document.getElementById('goal').value.trim();
  const resultList = document.getElementById('path-list');
  
  resultList.innerHTML = ''; // clear previous

  if (!startInput || !goalInput) {
    resultList.innerHTML = '<li class="error">Enter both start and goal coordinates, idiot.</li>';
    return;
  }

  let start, goal;
  try {
    start = startInput.split(',').map(n => parseInt(n.trim()));
    goal  = goalInput.split(',').map(n => parseInt(n.trim()));
    
    if (start.length !== 2 || goal.length !== 2 ||
        isNaN(start[0]) || isNaN(start[1]) || isNaN(goal[0]) || isNaN(goal[1]) ||
        start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7 ||
        goal[0] < 0  || goal[0] > 7  || goal[1] < 0  || goal[1] > 7) {
      throw new Error();
    }
  } catch {
    resultList.innerHTML = '<li class="error">Use format like 0,0 and 7,7. Numbers 0-7 only.</li>';
    return;
  }

  const path = knightPath(start, goal);

  if (!path) {
    resultList.innerHTML = '<li class="error">No path found (should never happen on 8×8 board...)</li>';
    return;
  }

  const steps = path.length - 1;
  resultList.innerHTML = `<li><span class="steps">Optimal path: ${steps} ${steps === 1 ? 'move' : 'moves'}</span></li>`;

  path.forEach((pos, i) => {
    const li = document.createElement('li');
    li.textContent = `${i === 0 ? 'START → ' : i === path.length-1 ? 'END ← ' : ''}[${pos[0]}, ${pos[1]}]`;
    if (i === 0) li.classList.add('start');
    if (i === path.length-1) li.classList.add('end');
    resultList.appendChild(li);
  });
}

 
// window.onload = () => {
//   document.getElementById('start').value = '0,0';
//   document.getElementById('goal').value = '7,7';
//   calculatePath();
// };
 
  const findButton = document.getElementById('find-btn');
 
    findButton.addEventListener('click', calculatePath);
 