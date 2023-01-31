/*
class MobileNavbar{
    constructor(mobileMenu , navList , navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click");
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();

        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
    

mobileNavbar.init();
*/



const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const btnx = document.getElementById('btn-x');
    btnx.classList.toggle('x-btn');
    const btn2x = document.getElementById('btn-2x');
    btn2x.classList.toggle('xx-btn')
    const btn3x = document.getElementById('btn-3x');
    btn3x.classList.toggle('xxx-btn')
}


btnMobile.addEventListener('click' , toggleMenu);


