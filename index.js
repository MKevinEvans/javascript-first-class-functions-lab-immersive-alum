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

function doublerWithBind(){
  return multipier.bind(null, 2);
}
let triplerWithBind = multipier.bind(null, 3);