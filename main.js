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

//Click menu page
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


//make home slowly fade to window scroll down
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1-window.scrollY/homeHeight;
})
//show arrow up button
const arrowUp = document.querySelector('.arrow_up');
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
})
arrowUp.addEventListener('click',(event)=>{
    scrollIntoView('#home');
})

//project
const workBtnContainer = document.querySelector('.work_category');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter==null){
        return;
    }
    //remove selection 
    const active = document.querySelector('.category_btn.selected')

    projectContainer.classList.add('ani_out');
    active.classList.remove('selected');
    const target = e.target.nodeName  === 'BUTTON' ? e.target : 
                        e.target.parentNode;
    target.classList.add('selected');

    setTimeout(()=>{
        projects.forEach((project)=>{
            console.log(project.dataset.type);
            if(filter == '*' || filter == project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
    
        projectContainer.classList.remove('ani_out');
    }, 300);

    
})





//scroll 이벤트 정의
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : 'smooth'});
}