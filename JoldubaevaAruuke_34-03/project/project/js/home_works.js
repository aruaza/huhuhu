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

//3 DZ
const tabContentItems=document.querySelectorAll('.tab_content_block')
const tabItems=document.querySelectorAll('.tab_content_item')
const tabItemsParent=document.querySelector('.tab_content_items')


const hideTabContent=()=>{
    tabContentItems.forEach((item)=>{
        item.style.display='none'
    })
    tabItems.forEach((item)=>{
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent=(index=0)=>{
    tabContentItems[index].style.display='block'
    tabItems[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabItemsParent.onclick=(event)=>{
    if(event.target.classList.contains('tab_content_item')){
        tabItems.forEach((tabItem,tabIndex)=>{
            if(event.target===tabItem){
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

const autoTab = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}