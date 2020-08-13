const topbar = document.querySelector('.navbar');
const buttonTop = document.getElementById('volverTop');

window.addEventListener('scroll', () =>{
    if(window.scrollY > 150){
        topbar.style.backgroundColor = "#222";
        buttonTop.classList.remove("invisible");
    } else{
        topbar.style.backgroundColor = "transparent";
        buttonTop.classList.add("invisible");
    }
});

function volverTop(){
    window.scrollTo(0, 0); // values are x,y-offset
}
