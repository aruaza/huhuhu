//1
const gmail_input=document.querySelector('#gmail_input')
const gmail_button=document.querySelector('#gmail_button')
const gmail_result=document.querySelector('#gmail_result')
const regexp= /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
gmail_button.addEventListener('click',()=>{
    if(regexp.test(gmail_input.value)){
        gmail_result.innerHTML='OK'
        gmail_result.style.color='green'
    }else{
        gmail_result.innerHTML='NOT OK'
        gmail_result.style.color='red'
    }
})

//2
const child_block=document.querySelector(".child_block")
        const parentBlock=document.querySelector('.parent_block')
        const mainWith=parentBlock.offsetWidth-child_block.offsetWidth
        const mainHeight=parentBlock.offsetHeight-child_block.offsetHeight
        let startW=0
        let startH=0
        const recursion=()=> {
            if (startW <= mainWith) {
                startW++
                child_block.style.left = `${startW}px`
                requestAnimationFrame(recursion)
            } else if (startW >= mainHeight && startH < mainHeight){
                startH++
                child_block.style.top = `${startH}px`
                requestAnimationFrame(recursion)
            }else if(startH >= mainWith && startW< mainWith) {
                startW++
                child_block.style.right = `-${startW}px`
                requestAnimationFrame(recursion)
            }else{
        startH++
        child_block.style.bottom = `-${startH}px`
        requestAnimationFrame(recursion)
    }
}
recursion()

//homework2
const seconds=document.querySelector('#seconds')
const startb=document.querySelector('#start')
const resetb=document.querySelector('#reset')
const stopb=document.querySelector('#stop')
let count= 0
let intervalClear

function start1() {
    clearInterval(intervalClear)
    count++
    seconds.innerText = count
    intervalClear = setTimeout(start1, 1000)
}
function stop1(){
    clearInterval(intervalClear)
}
function reset() {
    stop1()
    count = 0
    seconds.innerText = count
}

startb.onclick = () => start1()
resetb.onclick = () => reset()
stopb.onclick = () => stop1()

