//Variables
const header = document.querySelector('.header');
const aboutImage = document.querySelector('.about-image');
const aboutContent = document.querySelector('.about-content')

//Fucntions
window.addEventListener('DOMContentLoaded',()=>{

});

window.addEventListener('scroll',()=>{
      animateHeader();
      animate();
});

//Animations
const animateHeader =()=>{
    if(scrollY > 20){
        header.classList.add('startScroll');
    }else{
        header.classList.remove('startScroll');
    }
}
const animate = ()=>{
    const aboutImagePost = aboutImage.getBoundingClientRect().top;
    const userSight = window.innerHeight;

    if(aboutImagePost < userSight){
        aboutImage.classList.add('showDownUp');
        aboutContent.classList.add('showUpDown');
    }
    else{
        aboutImage.classList.remove('showDownUp');
        aboutContent.classList.remove('showUpDown');
    }

}
