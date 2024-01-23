var tegs = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var tegNum={}
for (var i = 0; i < tegs.length; i++) {
    var tag = tegs[i]
    if (tegNum[tag]) {
        tegNum[tag]++
    }
    else {
        tegNum[tag] = 1
    }
}
console.log(tegNum)

var num1 = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
var num2 = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];

var doubleNum = [];

for (var i = 0; i < num1.length; i++) {
    var element = num1[i];
    if (num2.includes(element) && doubleNum.indexOf(element) === -1) {
        doubleNum.push(element);
    }
}

console.log("Общие элементы в массивах",doubleNum);
