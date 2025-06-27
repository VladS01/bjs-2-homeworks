function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > max){
      max = arr[i];
    };

    if (arr[i] < min){
      min = arr[i];
    };

    sum = sum + arr[i];
  }

  let avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  let sum = 0;
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {

    sum = sum + arr[i];
  }
  return(sum);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let min = arr[0];
  let max = arr[0];
     
    for (let i = 0; i < arr.length; i++) {

      

      if (arr[i] > max){
        max = arr[i];
        
      };

      if (arr[i] < min){
        min = arr[i];
        
      };
      
      
     }
  let worker = max - min;
  return(worker);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i]; 
    } else {
        sumOddElement += arr[i]; 
    }

  }
  return(sumEvenElement - sumOddElement)
  
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i]; 
        countEvenElement += 1;
    } 

  }
  return(sumEvenElement / countEvenElement)


}

function makeWork (arrOfArr, func) {
    
    let maxWorkerResult = -Infinity;
    
    for (let i = 0; i < arrOfArr.length; i++) {
      
        const currentArr = arrOfArr[i];
        
        const result = func(...currentArr);
        
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }
    
    return maxWorkerResult;


}
