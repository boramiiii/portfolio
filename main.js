'use strict'

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => { 
    // console.log(window.scrollY);
    // console.log(navbarHeight);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//Click menu page
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event)=>{
    // console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    navbarMenu.classList.remove('open');

    // console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior : 'smooth'});
});

//navbar toggle btn
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');

navbarToggleBtn.addEventListener('click', ()=> {
    console.log('눌렸다!');
    navbarMenu.classList.toggle('open');
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


// ////////////////////////////////////////////////////////


//scroll 이벤트 정의
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior : 'smooth'});
}

//1. 모든 섹션 요소들과 아이템들을 가져온다
//2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
//3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

// const sectionId = [
//     '#home',
//     '#about',
//     '#skills',
//     '#work',
//     '#contact'
// ];
// const sections = sectionId.map(id => document.querySelector(id));
// const navItems = sectionId.map(id => document.querySelector(`[data-link="${id}"]`));
// console.log('시작');
// console.log(sections);
// console.log(navItems);

// const observerOption = {
//     root : null,
//     rootMargin : '0px',
//     threshold : 0.3,
// }
// let selectedNavItem = navItems[0];

// observerCallback = (entries, obsever) =>{
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             const index = sectionId.indexOf(`#${entry.target.id}`);
//             let selectedIndex;
//             if(entry.boundingClientRect.y < 0 ) {
//                 selectedIndex = index +1;
//             }else {
//                 selectedIndex = index -1;
//             }
//             selectedNavItem.remove('active');
//             selectedNavItem = navItems[selectedIndex];
//             selectedNavItem.classList.add('active');
//         };

//     });
// };
// const obsever = new IntersectionObserver(observerCallback, observerOption);
// sections.forEach(section => obsever.observe(section));