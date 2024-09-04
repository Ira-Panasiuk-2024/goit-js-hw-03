function filterArray(numbers, value) {
  // Створюю порожній масив для зберігання відфільтрованих чисел.
  const filteredNumbers = [];

  // ітерація по кожному елементу масиву numbers за допомогою for циклу.
  for (let i = 0; i < numbers.length; i++) {
    // Перевіряю, чи поточний елемент перевищує value
    if (numbers[i] > value) {
      // Додаю елемент до масиву filteredNumbers за допомогою методу push()
      filteredNumbers.push(numbers[i]);
    }
  }

  // Повертає новий масив filteredNumbers з підходящими числами як результат
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
