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