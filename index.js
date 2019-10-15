function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplyerValue){
  return (x)=>x*multiplyerValue
}

let doubler = createMultiplier(2);
let tripler = createMultiplier(3);

function multipier(x, y){
  return x*y;
}

let doublerWithBind = multipier(2)
let triplerWithBind = multipier(3)