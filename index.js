function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplyerValue){
  switch(multiplyerValue){
    case 2:
      return function doubler(num){
        return num*2
      }
    case 3:
      return function tripler(num){
        return num*3
      }
  }
  
}