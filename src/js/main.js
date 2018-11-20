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

document.addEventListener('click', function(e){
    if(e.target.closest('.menu') === null){
        const menu = document.querySelector('.menu'); 
        menu.classList.remove('menu_state_open');
    }
});
// language-select

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

// popup
const registration = document.querySelector('.user');
registration.addEventListener('click', function() {
    showModal();
})

function showModal() {
    const btnclose = document.querySelector('.icon-x');
    const darkLayer = document.createElement('div'); 
    darkLayer.classList.add('shadow'); 
    document.body.appendChild(darkLayer); 

    const modal = document.querySelector('.modal'); 
    modal.style.display = 'block'; 

    darkLayer.onclick = function () {  
        darkLayer.parentNode.removeChild(darkLayer); 
        modal.style.display = 'none'; 
        return false;
    };

    btnclose.onclick = function () {  
        darkLayer.parentNode.removeChild(darkLayer); 
        modal.style.display = 'none'; 
        return false;
    };
}

// validate

const inp = document.querySelectorAll('.input');
const btn = document.querySelector('.submit');
const message = document.querySelector('.message');


btn.addEventListener('click', function(e){
    let error = false;
    for(let i = 0; i < inp.length; i++){
        if(inp[i].value === ''){
            inp[i].classList.add('err');
            message.classList.add('active');
            error = true;
        } 
        else{
            inp[i].classList.remove('err');
        }
    }
    if(error){
        e.preventDefault(); 
    }       
});

for(let i = 0; i < inp.length; i++) {
    inp[i].addEventListener('input', function() {
        this.classList.remove('err');
    })
}

// phone mask

jQuery(function($){
    $("input[type=tel]").mask("+3 8(999) 999-9999");
});