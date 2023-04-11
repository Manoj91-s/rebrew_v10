
const navLinkEls = document.querySelectorAll('.nav_link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl =>{

    navLinkPathname = new URL(navLinkEl.href).pathname;
    if(navLinkPathname == windowPathname){
        navLinkEl.classList.add('active');
    }
})

