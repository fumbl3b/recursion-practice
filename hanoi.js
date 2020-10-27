/* eslint-disable no-console */
'use strict';

// const a = { name: a, discs: [] };
const a = [];
const b = [];
const c = [];
const moveCounter = 0;

function newHanoi(num) {
  for (let i = 0; i < num; i++ ) {
    a.push(num-i);
    console.log(a,b,c);
  }

  solver(num, a, c, b);
  console.log('total moves were:', moveCounter);
}

const solver = (disc, source, dest, aux) => {
  if(disc === 1) {
    makeMove(source, dest);
  } else {
    solver(disc - 1, source, aux, dest);
    makeMove(source, dest);
    solver(disc - 1, aux, dest, source);
  }
};

const makeMove = (source, target) => {
  
  console.log(`moving from ${source} to ${target}`);
  target.push(source.pop());
  console.log(a, b, c);

};


newHanoi(5);
