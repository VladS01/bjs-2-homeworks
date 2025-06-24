"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4*a*c
  if (D == 0) {
    let x = -b/(2*a)
    arr.push(x);
  } else if (D > 0) {
    let root1 = (-b + Math.sqrt(D))/(2*a);
    let root2 = (-b - Math.sqrt(D))/(2*a);
    arr.push(root1, root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
    // 1. Преобразуем процентную ставку
    const monthlyPercent = (percent / 100) / 12;
    
    // 2. Рассчитываем тело кредита
    const creditBody = amount - contribution;
    
    // 3. Проверяем, если тело кредита равно 0, возвращаем 0
    if (creditBody <= 0) {
        return 0;
    }
    
    // 4. Рассчитываем ежемесячный платеж по формуле
    const payment = creditBody * (
        monthlyPercent + 
        (monthlyPercent / ((Math.pow(1 + monthlyPercent, countMonths) - 1)))
    );
    
    // 5. Рассчитываем общую сумму выплат
    const totalPayment = payment * countMonths;
    
    // 6. Округляем результат до двух знаков после запятой
    return parseFloat(totalPayment.toFixed(2));

}