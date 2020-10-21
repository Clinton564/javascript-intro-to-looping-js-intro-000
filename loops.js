function incrementVariable() {
  let i=0;
  i = i + 1;
  return i;
}

function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's' }.`)
  }
  return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(num){
do {
  console.log("I run once regardless");
  console.log(incrementVariable());
  console.log("<");
  console.log(num);
} while(incrementVariable() < 10);
}
