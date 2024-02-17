const modal=document.querySelector('.modal')
const modalTriggerButton=document.querySelector('#btn-get')
const closeModal=document.querySelector('.modal_close')
const openModal=()=>{

    modal.style.display='block'
    document.body.style.overflow='hidden'
}
const closeFunction=()=>{
    modal.style.display='none'
    document.body.style.overflow=''
}
modalTriggerButton.onclick=()=>openModal()
closeModal.onclick=()=>closeFunction()
modal.onclick=(event)=>{
    if(event.target===modal){
        closeFunction()
    }
}

setTimeout(openModal,10000)


const ScrollToBottom = () => {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight
}
const scrollHandler = () => {
    if (ScrollToBottom()) {
        openModal()
        window.removeEventListener('scroll', scrollHandler)
    }
}


window.addEventListener('scroll', scrollHandler)


