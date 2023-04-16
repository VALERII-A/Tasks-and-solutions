let values = ["100", "30", "Не число", "20", "Тоже не число"];
let x = 0;
const total = values.reduce((sum, elem) => {
if (isNaN(elem) !== true) {
x += parseFloat(elem)
}
},0)
console.log(x)
///////////////
let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";
let x = layout.match(/\d+/g);
let y = [];
if (x == null) {
x = [];
}
for (i=0; i<x.length;i++){
// console.log(x[i]);
if (x[i] % 2 == 0) {
y.push(Math.pow(x[i],2));
} else if (x[i] < 0) {
y = y;
break;
} else {
y.push(+x[i]);
} } console.log(y)

