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
