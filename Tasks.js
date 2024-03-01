// 1 //
// Найдите числа, которые делятся на заданное число
// Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель.
// Первый аргумент - это массив чисел, а второй - делитель.
// Пример:
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
// Решение:
function divisibleBy(numbers, divisor) {
  return numbers.filter((e) => e % divisor === 0);
}

// 2 //
// Ваша функция принимает два аргумента:
//  текущий возраст отца (лет)
//  текущий возраст сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).
//  Решение:
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// 3 //
// Если задано число n, вернуть количество положительных нечетных чисел меньше n
//  Решение:
const oddCount = (n) => (n % 2 !== 0 ? (n - 1) / 2 : n / 2);

// 4 //
// Преобразуйте строку в число
//  Решение:
const stringToNumber = (str) => +str;

// 5 //
// Ваша задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число.
// Это число - позиция, которую слово должно занимать в результате.
// Решение:
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}
// 6 //
//  Определить сколько раз каждый элемент встречается в массиве.
//  Пример:
//  const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// Решение:
function numberOfFruits(arr) {
  let buffer = {};
  arr.forEach((i) => {
    if (!buffer[i]) {
      buffer[i] = 1;
    } else {
      buffer[i]++;
    }
  });
  console.log(buffer);
}
// 6.1 //
//  Создать массив который содержит только уникальные значения исходного массива.
//  Пример:
//  const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// Решение:
const unique = (arr) => {
  const buffer = [];
  arr.map((i) => {
    if (!buffer.includes(i)) {
      buffer.push(i);
    }
  });
};
// 7 //
// На выходе требуется получить объект, где ключ - возраст, а значение - массив студентов, которые относятся к данной возрастной группе.
// Исходный массив:
// const students = [
//   { name: 'alex', age: 20 },
//   { name: 'mike', age: 24 },
//   { name: 'masha', age: 20 },
//   { name: 'stas', age: 18 },];
// Решение:
const grouped = (arr) => {
  const obj = {};
  arr.forEach((i) => {
    if (!obj[i.age]) {
      obj[i.age] = [i];
    } else {
      obj[i.age].push(i);
    }
  });
  return obj;
};
