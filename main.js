'use strict'

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => { 
    console.log(window.scrollY);
    console.log(navbarHeight);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event)=>{
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior : 'smooth'});
});

//Clcik on contact Me

const contactMe = document.querySelector('.home_contact');
contactMe.addEventListener('click', (event) => {
    scrollIntoView('#contact');

});

//scroll 이벤트 정의
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : 'smooth'});
}