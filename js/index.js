const topbar = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
    if(window.scrollY > 150){
        topbar.style.backgroundColor = "#222";
    } else{
        topbar.style.backgroundColor = "transparent";
    }
});
const buttonTop = document.querySelector('#volverTop');

function volverTop(){
    window.scrollTo(0, 0); // values are x,y-offset
}
