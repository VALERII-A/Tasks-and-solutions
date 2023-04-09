let values = ["100", "30", "Не число", "20", "Тоже не число"];
let x = 0;
const total = values.reduce((sum, elem) => {
if (isNaN(elem) !== true) {
x += parseFloat(elem)
}
},0)
console.log(x)