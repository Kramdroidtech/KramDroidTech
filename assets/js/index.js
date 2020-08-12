
//Fucntions
window.addEventListener('DOMContentLoaded',()=>{
    window.addEventListener('scroll',()=>{

        const userSight = window.innerHeight;

        //Animations
        const animateHeader = () => {
            const header = document.querySelector('.header');

            if(scrollY > 20){
                header.classList.add('startScroll');
            }else{
                header.classList.remove('startScroll');
            }
        }

        const animateAbout = () => {
            const aboutImage = document.querySelector('.about-image');
            const aboutContent = document.querySelector('.about-content');
            const aboutImagePost = aboutImage.getBoundingClientRect().top;
        
            if(aboutImagePost < userSight){
                aboutImage.classList.add('showDownUp');
                aboutContent.classList.add('showUpDown');
            }
            else{
                aboutImage.classList.remove('showDownUp');
                aboutContent.classList.remove('showUpDown');
            }
        
        }
        //Run Scroll Function
        animateHeader();
        animateAbout();
  });

    
    const navigationBar = () => {
        const toggleBtn = document.querySelector('.toggle-btn');
        const navigation = document.querySelector('.menu');

        toggleBtn.addEventListener('click',() => {
            navigation.classList.toggle('showMenu');
        });
    }

    navigationBar();
});



