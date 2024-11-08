window.addEventListener('DOMContentLoaded', () => {
    const header__items = document.querySelector('.header__items'),
    headerItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        header__items.classList.toggle('header__items_active');
    });

    headerItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            header__items.classList.toggle('header__items_active');
        })
    })
})


$(document).ready(function(){
    $('.carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow_prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow_next.png"></button>'
        // prevArrow: '<button type="button" class="slick-prev">lorem ipsum</button>',
        // nextArrow: '<button type="button" class="slick-next">lorem ipsum</button>'
    });
  });


