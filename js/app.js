
// Sticky Header
if (document.getElementById("header")) {
    window.onscroll = function () {
        myFunction()
    };
    var header = document.getElementById("header");
    var sticky =  header.offsetTop;
}


function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Mobile menu

$(document).ready(function () {
    $('.header .nav-btn').click(function () {
        $('.header .nav-btn').toggleClass('open');
    });
});

$(document).ready(function () {
    $('.cd-dropdown-trigger').on('click', function (event) {
        event.preventDefault();
        toggleNav();
    });

    //on mobile - open submenu
    $('.has-children').children('a').on('click', function (event) {
        //prevent default clicking on direct children of .has-children 
        event.preventDefault();
        var selected = $(this);
        selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
    });

    //submenu items - go back link
    $('.go-back').on('click', function () {
        var selected = $(this),
            visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
        selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
    });

    function toggleNav() {
        var navIsVisible = (!$('.cd-dropdown').hasClass('dropdown-is-active')) ? true : false;
        $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
        $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
        if (!navIsVisible) {
            $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('.has-children ul').addClass('is-hidden');
                $('.move-out').removeClass('move-out');
                $('.is-active').removeClass('is-active');
            });
        }
    }
});

// First Slider

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// Second slider

var swiper = new Swiper('.swiper-logo-container', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 8,
    freeMode: true,
     mousewheel: true,
});

<!--Back To Top-->

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top, .products-slider-logo .swiper-slide, .mobile-slider-logo .swiper-slide').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// Filter in product page

$('.products-slider-logo .swiper-slide, .mobile-slider-logo .swiper-slide').click(function(){
    $(".products-slider-logo .swiper-slide, .mobile-slider-logo .swiper-slide" ).removeClass( "active" );
    $(this).addClass('active');
    var tabv = this.getAttribute("data-tab");
    filterTab(tabv);

});

function filterTab(thisTab){
    $('.products--items .item').filter('.'+thisTab).show();
    $('.products--items .item').filter(':not(.'+thisTab+')').hide();
}


// Filter in brands

$('.brand-categories--item, .mobile-slider-logo .swiper-slide').click(function(){
    $(".brand-categories--item, .mobile-slider-logo .swiper-slide").removeClass( "active" );
    $(this).addClass('active');
    var tabv = this.getAttribute("data-tab");
    filterBrands(tabv);
});

function filterBrands(thisTab){
    $('.brand-articles .brand-articles--item').filter('.'+thisTab).show();
    $('.brand-articles .brand-articles--item').filter(':not(.'+thisTab+')').hide();
}

$('.brand-categories .brand-categories--item').click(function(){
    var id = this.getAttribute("href"),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1000);
    idClick(id);
});

function idClick(thisId){
    $(thisId).click();
}
