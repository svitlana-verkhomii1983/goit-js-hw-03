function makeArray(firstArray, secondArray, maxLength) {
  
    const combinedArray = firstArray.concat(secondArray);  // Об'єднуємо обидва масиви
   
    if (combinedArray.length > maxLength) {                // Перевіряємо, чи перевищує довжина об'єднаного масиву maxLength
       
    return combinedArray.slice(0, maxLength); // Якщо так, повертаємо копію масиву з довжиною maxLength елементів
    }
   
    return combinedArray; // Якщо ні, повертаємо весь новий масив
}

// Перевірка функції
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []