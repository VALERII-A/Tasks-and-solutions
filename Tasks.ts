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


// 6 //
// Реализуйте перечисление ModalStatus с двумя значениями: Opened и Closed
// Реализуйте функцию buildModal(). Он возвращает объект, который описывает модальное окно. Параметры функции:
// Текст, который должен быть внутри окна после инициализации
// Статус, с которым надо создать объект окна
// Функция возвращает объект с двумя полями: text (здесь хранится переданный текст) и status (здесь хранится переданный статус)
//  Пример:
// const modal = buildModal('hexlet forever', ModalStatus.Opened);
// { text: 'hexlet forever', status: ModalStatus.Opened }
//  Решение:
enum ModalStatus {
  Opened, Closed
}

const buildModal = (text: string, status: ModalStatus): { text: string; status: ModalStatus } => {
  return {text, status} 
}


// 7 //
// Реализуйте функцию getOlderUser(), которая принимает на вход двух пользователей и возвращает того, который старше. 
// Если пользователи являются ровесниками, то возвращается null:
//  Решение:
type User = {
  name: string,
  age: number,
}

function getOlderUser(user1: User, user2: User): User | null {
  if (user1.age > user2.age) {
    return user1
  }
  if (user2.age > user1.age) {
    return user2
  }
  return null
}


// 8 //
// Реализуйте функцию getParams(), которая принимает на вход строку запроса (query string) и возвращает параметры в виде объекта:
//  Пример:
// getParams('per=10&page=5');
//  { per: '10', page: '5' }
// getParams('name=hexlet&count=3&order=asc');
//  { name: 'hexlet', count: '3', order: 'asc' }
// Решение:
function getParams(string:string) {
  const parts = string.split('&')
   const init: any = {}
   const result = parts.reduce((acc,part) => {
     const [key,value] = part.split('=')
     acc [key] = value
     return acc
   },init)
   return result
 }
 

// 9 //
//  Реализуйте namespace Company, в котором экспортируется функция isEmployeeEmail(). 
//  Функция принимает почту и домен. Если емейл пользователя содержит указанный домен, то функция возвращает true:
//  Пример:
// Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
// true
// Company.isEmployeeEmail('user@example.com', 'hexlet.io');
// false
//  Решение:
namespace Company {
  export function isEmployeeEmail(email: string, domain:string):boolean {
   return email.endsWith(`@${domain}`)
  }
}


// 10 //
// Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат.
// Последний будет использоваться для проверки каждого числа на соответствие требованиям:
// const numbers = [1, -5, 2, 3, 4, 133];
// filter(numbers, (n) => n > 3); // [4, 133]
// filter(numbers, (n) => n % 2 == 0); // [2, 4]
//  Решение:
function filter(numbers: number[], callback: (n: number) => boolean): number[] {
  const result: number[] = [];
  numbers.forEach((n) => {
    if (callback(n)) {
      result.push(n);
    }
  });
  return result;
}


// 11 //
// Реализуйте функцию map(). 
// Она должна принимать на вход массив чисел и колбек, который будет использоваться для преобразования каждого числа из массива в другое число. 
// Функция возвращает массив с новыми числами:
// map([3, 9], (n) => n - 3);
// // [0, 6]
// map([8, 9], (n) => n + 8);
// // [16, 17]
// Параметры функции:
// Массив чисел
// Анонимная функция, которая принимает на вход число и возвращает число. У этой функции есть необязательный параметр — индекс элемента в массиве
// map([8, 9], (n, index) => index + n);
// // [8, 10]
//  Решение:
function map(numbers: number[], callback: (n: number, index: number) => number):number[] {
  const result: number[] = []
  numbers.forEach((n, index) => result.push(callback(n, index)))
  return result
}