//1
var tegs = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var tegNum={}
for (var i = 0; i < tegs.length; i++) {
    var tag = tegs[i]
    if (tegNum[tag]) {
        tegNum[tag]++
    }    else {
        tegNum[tag] = 1
    }
}
console.log(tegNum)
console.log(Object.keys(tegNum).sort(function (a,b){
    return tegNum[b] - tegNum[a]}))

//2
const fio=(surname,name,famName)=>{
    let nameFirst=name[0].toUpperCase()
    let famNameFirst=famName[0].toUpperCase()
    let small=nameFirst + '.'+ famNameFirst +'.'
    return surname+' '+small
}
console.log(fio("Бекова", "Айдана", "Бековна"))

//3
const bookAll=(nameBook)=>{
    let letterY=nameBook.filter(i=>i.toLowerCase().includes('y'))
    let elseBooks=nameBook.filter(i=>!i.toLowerCase().includes('y'))
    console.log(letterY)
    console.log(elseBooks)
}
bookAll(['dytor','huhu','kiot','jyti'])

//4
const users = [
    { name: "Max", birthDate:'23 february'},
    { name: "jane", birthDate: '13 march' },
    { name: "jenny", birthDate:'5 july' },
    { name: "maria", birthDate:'6 june' },
    { name: "tim", birthDate:'3 december' }
]
users.forEach(function(user) {
    console.log(`Пользователь ${user.name} родился ${user.birthDate}`)
})






// sortBooks("Harry Potter", "Lord of the Rings", "The Great Gatsby", "Pride and Prejudice", "The Catcher in the Rye")
