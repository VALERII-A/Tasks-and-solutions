// 1 //
//  Допишите тело функции repeat(), которая повторяет строку указанное количество раз. 
//  Функция должна возвращать полученный результат.
//  Постарайтесь не использовать встроенные методы, для такой реализации вам понадобится цикл.
// Пример:
//  repeat('hexlet', 2); // hexlethexlet
//  repeat('wo', 3); // wowowo
// Решение:
function repeat(text: string, count: number) {
    let string = ''
    for(let i = 0; i < count;i++) {
        string += text
    }
    return string
  }
// Вариант с использованием методов:
function repeatM(text: string, count: number) {
    return new Array(count).fill(text).join('');
  }


// 2 //
//  Реализуйте функцию getHiddenCard().
//  Она принимает на вход номер кредитки, который состоит из 16 цифр, в виде строки и возвращает его скрытую версию. 
//  Эта версия может использоваться на сайте для отображения. 
//  Например, если номер исходной карты был 2034399002125581, то скрытая версия выглядит так: ****5581.
//  Получается, функция заменяет первые 12 символов на звездочки. 
//  Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.
// Пример:
//  getHiddenCard('1234567812345678', 2) // "**5678"
// Решение:
function getHiddenCard(numders: string, stars:number = 4) {
  const lastNumbers = numders.slice(-4)
  const starSum = '*'.repeat(stars)
  const res = starSum + lastNumbers
return res
}


// 3 //
// Напишите функцию, которая возвращает массив четных чисел из массива numbers.
// Пример:
//  const numbers = [1, 3, 8, 9, 100, 23, 55, 34];
// Решение:
const getEvenNumbers = ()=> numbers.filter((e)=>e % 2 == 0)


// 4 //
// Анаграммы — это слова, которые состоят из одинаковых букв.
//  Например:
//   спаниель — апельсин
//   карат — карта — катар
//   топор — ропот — отпор
// Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова.
// Функция принимает исходное слово и список для проверки — массив. 
// А возвращает функция массив всех анаграмм. Если в списке нет анаграммы, то возвращается пустой массив
//  Решение:
function filterAnagrams(word: string, array: string[]): string[] {
  const anagram = word.split('').sort().join();
  return array.filter( (i) => i.split('').sort().join() === anagram) 
}
     

// 5 //
// Реализуйте функцию isComplete(), которая принимает на вход курс и определяет, завершен ли он. 
// Завершенным считается курс, в который добавлено четыре или более уроков:
//  Пример:
// const course = {
//   name: 'Java',
//   lessons: ['variables', 'functions', 'conditions'],
// };
// isComplete(course); false
//  Решение:
function isComplete(course: { name: string, lessons: string[] }): boolean {
  return course.lessons.length >= 4;
}