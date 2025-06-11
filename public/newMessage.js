document.addEventListener("DOMContentLoaded",()=>{
    const myNewButton = document.querySelector('.send-message');

    if(myNewButton){
        myNewButton.addEventListener('click',()=>{
            window.location.href = "/new";
        })
    }
})

