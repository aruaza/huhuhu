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

//dz 5
const somInput=document.querySelector('#som')
const usdInput=document.querySelector('#usd')
const eurInput=document.querySelector('#eur')

const converted = (element, targetElement,additionalElement, current)=>{
    element.oninput=()=>{
        const request=new XMLHttpRequest()
        request.open("GET","data.json")


        request.setRequestHeader("Content-type","application/json")
        request.send()

        request.onload=()=>{
            const data=JSON.parse(request.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    additionalElement.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    additionalElement.value = (element.value * 0.91).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    additionalElement.value = (element.value * 1.10).toFixed(2)
                    break
                default:
                    break
            }
        }
    }
}

converted(somInput, usdInput, eurInput, 'som')
converted(usdInput, somInput, eurInput, 'usd')
converted(eurInput, somInput, usdInput, 'eur')









