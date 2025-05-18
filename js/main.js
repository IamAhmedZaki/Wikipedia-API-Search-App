document.addEventListener('readystatechange',(event)=>{
    if (event.target.readyState === 'complete') {
        console.log(event);
        console.log(event.target);
        
    }
})