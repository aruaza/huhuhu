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
        if (i > tabContentItems.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}
autoTab()

