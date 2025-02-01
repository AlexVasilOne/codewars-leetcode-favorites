function dirReduc(arr){
  const stack = [];
  for(const elem of arr) {
    if(stack.length === 0){
      stack.push(elem);
      continue;
    } 
    let topDir = stack.at(-1);
    if(topDir === 'NORTH' && elem === 'SOUTH') {
      stack.pop();
      continue;
    }
    if(topDir === 'SOUTH' && elem === 'NORTH') {
      stack.pop(); 
      continue;
    }
    if(topDir === 'WEST' && elem === 'EAST') {
      stack.pop(); 
      continue;
    }
    if(topDir === 'EAST' && elem === 'WEST') {
      stack.pop(); 
      continue;
    }
    stack.push(elem);
  }
  return stack
}