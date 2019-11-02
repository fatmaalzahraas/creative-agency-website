/*global $, window, document*/


$(function () {
    
    'use strict';
    
    /*Loading Screen*/

    $(window).on('load', function () {
        
        $('.overlay-loading, .overlay-loading .screen-loading').fadeOut(1500);
        
    });
    
   /*Calculate height of home section*/
    
    var winHeight = $(window).height(),
        btnScrollTop = $('.scrollToTop');
        
       
    $('header').height(winHeight);
    
    
   /*When Scroll ....Sticky Navbar*/
    
    $(window).scroll(function () {
        
        var winScrollTop = $(window).scrollTop();
        
        if ($(window).width() >= 992) {
            
            if (winScrollTop > 5) {
            
                $('nav.navbar').addClass('sticky');
            
            } else {
            
                $('nav.navbar').removeClass('sticky');
            }
        }
        
        /*Sync Nav Links With Sections*/
        $('.block').each(function () {
            
            if (winScrollTop > ($(this).offset().top - 300)) {
                
                $('nav ul li a[data-scroll="' + $(this).attr("id") + '"]').addClass('active').parent('li').siblings().find('.nav-link').removeClass('active');
                
            } else if (winScrollTop < 300) {
                
                $('nav ul li a[data-scroll="header"]').addClass('active').parent().siblings().find('.nav-link').removeClass('active');
            }
            
        });
        
        /*ScrollToTop With Button*/
        if (winScrollTop >= 700) {
           
            if (btnScrollTop.is(':hidden')) {
                
                btnScrollTop.fadeIn(500);
                
            }
           
        } else {
               
            btnScrollTop.fadeOut(500);
            
        }
        
    });
    
    btnScrollTop.click(function (e) {
        
        e.preventDefault();
        
        $('html, body').animate({
            
            scrollTop: 0
            
        }, 1000);
        
    });
    
    /*LightBox*/
    $(document).on('click', '[data-toggle="lightbox"]', function (e) {
        
        e.preventDefault();
        
        $(this).ekkoLightbox({
            
            alwaysShowClose: true
        });
        
    });
    
    /*Owl Carousel*/
    $("#choose-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        dots: true,
        dotsEach: true,
        autoplay: true,
        animateOut: 'fadeOut'
        
    });
    
    $('#testim-slider').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            995: {
                items: 2
            }
        }
    });
    
    /*Prevent Default For Submit*/
    $('[type="submit"]').click(function (e) {
        
        e.preventDefault();
        
    });
    
    /*Smooth Scroll*/
    $('a[href^="#"]').click(function (e) {
        
        e.preventDefault();
        
        var hash = $(this.hash);
        
        $('html, body').animate({
            
            scrollTop: hash.offset().top
            
        }, 1000);
    });
    
    /*Nicescroll*/
    $("body").niceScroll({
         
        cursorcolor: "#6195FF",
        cursorwidth: "12px",
        cursorborder: "2px solid #6195FF",
        cursorborderradius: "15px",
        scrollspeed: 100,
        zindex: 9999,
        cursorminheight: 20
         
    });
    
});