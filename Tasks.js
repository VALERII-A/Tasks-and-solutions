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
// 8 //
// Функция принимает 2 аргумента - массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из 1-го аргумента равна числу, которое приходит 2-м аргументом, функция должна вернуть новый массив из этих двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив.
// сходный массив и целое число:
// const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
// const sum = 10;
// Решение:
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// function findTwoNumbers(arr, targetSum) {
//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//           if (arr[i] + arr[j] === targetSum) {
//               res.push(i, j);
//               return res;
//           }
//       }
//   }

//   return null;
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9 //
// Получить единый массив из любимых пицц каждого друга
// Имеется исходный массив friends:
// const friends = [
//   { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
//   { name: 'mike', pizzas: ['salami', 'margarita'] },
//   { name: 'stas', pizzas: ['meat'] },
//   { name: 'anna', pizzas: ['fish'] }];
// Решение:
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// const pizzas = friends.reduce((accum, current) => {
//   return [...accum, ...current.pizzas];
// }, []);
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10 //
// Записать строку (символы строки) в обратном порядке
// Наше исходное строковое значение: const myStr = 'pizza';
// Решение:
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// const rev = (string) => {
//   return string.split("").reverse().join("");
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11 //
// Реализуйте функцию fibonacci(n), которая возвращает n-ное число Фибоначчи.
// Числа Фибоначчи определяются следующим образом: F(0) = 0, F(1) = 1, и для всех n больше 1, F(n) = F(n-1) + F(n-2).
// Ограничения:
// 0 <= n <= 30
// Решение:
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// fibonacci = function (n) {
//   if (n < 0 || n > 30) {
//        return ;
//    } else if (n === 0) {
//        return 0;
//    } else if (n === 1) {
//        return 1;
//    } else {
//        let a = 0;
//        let b = 1;
//        let result;
//        for (let i = 2; i <= n; i++) {
//            result = a + b;
//            a = b;
//            b = result;
//        }
//        return result;
//    }
// };
///////////////////////////////////////////////////////////////////////////////////////////////////////////
