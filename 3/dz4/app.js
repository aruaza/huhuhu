function numCalc(numbers) {
    var positiveNumbers = []
    var sum = 0
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i]
        if (num > 0) {
            positiveNumbers.push(num)
            sum += num
        }
    }
    if (positiveNumbers.length === 0) {
        return "Не подходит"
    }
    var average = sum / positiveNumbers.length
    return average
}
var result = numCalc(2, -78, 45, 4, -7, -6, -10, 26, 30, 8)
console.log("Среднее арифметическое чисел:", result)

//2
function numSquares(numbers2) {
    var sum2 = 0
    for (var i = 0; i < numbers2.length; i++) {
        var num2 = numbers2[i]
        if (num2 % 2 === 0) {
            sum2 += num2 * num2
        }
    }

    return sum2
}

//3
function filterLetters(words) {
    var result3 = []

    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        if (word.toLowerCase().includes('t') && word.toLowerCase().includes('a')) {
            result3.push(word)
        }
    }

    return result3
}

