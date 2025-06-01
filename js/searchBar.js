export const setSearchFocus=()=>{
    document.querySelector('search').focus()
}

export const showClearButton=()=>{
    const search=document.getElementById('search')
    const clear=document.getElementById('clear')

    if (search.value.length) {
        clear.classList.add('flex')
        clear.classList.remove('none')
    }else{
        clear.classList.add('none')
        clear.classList.remove('flex')
    }
}