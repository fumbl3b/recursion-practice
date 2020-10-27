/* eslint-disable no-console */
'use strict';

function sheepCount(number) {
  if (number == 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log(`${number}: Another sheep jumps over the fence`);
  sheepCount(number - 1);
  return;
}

sheepCount(3);

function powerCalc(base, exponent) {
  if (exponent < 0) {
    return 'exponent should be >= 0';
  } else if (exponent === 0) {
    return 1;
  } else {
    return base * powerCalc(base, exponent - 1); 
  }
}

console.log(powerCalc(10,2));
console.log(powerCalc(10,-2));

function reverseString(str) {
  if (str.length === 0)
    return '';

  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log(reverseString('Harry'));

function nthTriangleNum(n) {
  if (n === 0)
    return 0;

  return n + nthTriangleNum(n-1);
}

console.log(nthTriangleNum(9));

function stringSplitter(str, char) {
  let idxOf = str.indexOf(char);

  if (idxOf === -1)
    return [str];

  return [ str.slice(0,idxOf), ... stringSplitter(str.slice(idxOf + 1, str.length), char) ];
}

console.log(stringSplitter('test1/test2/test3', '/'));
console.log(stringSplitter('blab.lablabhab.labhalb', '.'));

function fib(n) {
  if (n === 0) 
    return [0];
  else if (n === 1) 
    return [0, 1];

  const arr = fib(n - 1);
  return [...arr, arr[n-1] + arr[n-2]];
}

console.log(fib(7));

function factorial (num) {
  if (num <= 0)
    return 1;
  
  return num * factorial(num - 1);
}

console.log('factorial of 4 is:',factorial(4));
console.log('factorial of 5 is:',factorial(5));

function MazeSolver(maze) {

  this.maze = maze;
 
  this.traverse(column, row) {
    if(this.mazeArr[column, row] == 'e'){
      console.log(`Solved at column ${column}, row ${row} `);
    } else if(this.mazeArr[column][row] === ' ')
  };

  if (mazeArr[location[0]][location[1]] === 'e')
  if (mazeArr[location[0]][location[1]] === '*')
  if (mazeArr[location[0]][location[1]] === ' ')
    return location;

}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

console.log(mazeSolver(mySmallMaze))