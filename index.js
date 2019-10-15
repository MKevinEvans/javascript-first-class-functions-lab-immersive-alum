function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplyerValue){
  return (x)=>x*multiplyerValue
}

let doubler = createMultiplier(2);
let tripler = createMultiplier(3);

function multiplier(x, y){
  return x*y;
}

let doublerWithBind = multiplier.bind(null, 2);
let triplerWithBind = multiplier.bind(null, 3);