var fruits =('banana','orange','apple')
// fruits.push('cherry')
console.log(fruits)
// var addFruit = fruits.unshift('apple')
// var deleteFruit = fruits.pop()
console.log(fruits)

var children = [1994,2024,2015,2023,2000,1999,2018,2014]
var currentYear = 2024
var gifts=0
for(var i of children){
   var childAge = currentYear - i
    if(childAge >=3 && childAge <=17){
        gifts++
    }
}
console.log(gifts)