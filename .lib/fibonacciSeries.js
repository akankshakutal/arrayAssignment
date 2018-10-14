const generateFibonacciSeries = function(numberofTerms) { 
  let fibonacciSeries = [];
  let firstNum  = -1 ;
  let secondNum = 1;
  for(let term=0; term<numberofTerms; term++) {
    fibonacciSeries[term] = firstNum + secondNum ;
    firstNum = secondNum;
    secondNum = fibonacciSeries[term];
  }
  return fibonacciSeries;
}

exports.generateFibonacciSeries = generateFibonacciSeries;
