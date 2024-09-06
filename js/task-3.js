function filterArray(numbers, value) {
   
    const filteredNumbers = [];      // Створюємо порожній масив для зберігання підходящих чисел

    
    for (const number of numbers) {  // Використовуємо цикл для ітерації кожного елемента масиву numbers
        
        if (number > value) {  // Перевіряємо, чи більше число значення value

                               // Якщо так, додаємо число до масиву filteredNumbers
            filteredNumbers.push(number);
        }
    }

    
    return filteredNumbers;    // Повертаємо новий масив з підходящими числами
}

// Перевірка функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]