

const main_tags =document.getElementsByTagName('main');
const footer_tags = document.getElementsByTagName('footer');
const nav_icon_id = document.getElementById('nav_icon_id');
const mobile_menu_page_obj = document.getElementsByClassName('mobile_menu_page');

var MMSICC = 0;

nav_icon_id.addEventListener('click', () =>{
    
    MMSICC +=1;
    if(MMSICC == 1){
        footer_tags[0].classList.add('footer_margin_delete');
        main_tags[0].classList.add('hide_index_main');
        mobile_menu_page_obj[0].classList.add('mobile-menu-opened');
        nav_icon_id.src = '/images/close_window_icon.png';
    }
    else if (MMSICC > 1){
        nav_icon_id.src = '/images/free_icon_1.svg';
        MMSICC = 0;
        footer_tags[0].classList.remove('footer_margin_delete');
        main_tags[0].classList.remove('hide_index_main');
        mobile_menu_page_obj[0].classList.remove('mobile-menu-opened');
        
    }
    
    console.log(MMSICC);
    
});
