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
let start=0
const recursion=()=>{
    if(start<=449){
        start++
        child_block.style.left=`${start}px`
        requestAnimationFrame(recursion)
    }
}
recursion()
