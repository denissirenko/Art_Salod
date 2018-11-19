const menu = document.querySelector('.menu__icon');
const menuItem = document.querySelectorAll('.menu__links-item');

menu.addEventListener('click', function() {
    const btn = this.closest('.menu');
    btn.classList.toggle('menu_state_open');
})

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', function() {
        const menu = this.closest('.menu');
        menu.classList.remove('menu_state_open');
    })
} 


$('.language-select').click(function(){
$(this).toggleClass('open');
})

$('.language-select li').click(function(){
var setLang = $('.language-select').data('location'),
    dataLangSelect = $(this).data('lang')
        $('.language-select').data('location', dataLangSelect);
        $('.language-select li').removeClass('active');
        $(this).toggleClass('active');
})