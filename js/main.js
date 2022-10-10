'use strict';
// Component DOM Variable

const slide1 = $('#slide1')
const slide2 = $('#slide2')
const slide3 = $('#slide3')
const slide4 = $('#slide4')
const slide5 = $('#slide5')
const slide6 = $('#slide6')
const slide7 = $('#slide7')
const slide8 = $('#slide8')
const slide9 = $('#slide9')
const techSlide1 = $('#techSlide1')
const techSlide2 = $('#techSlide2')
const techSlide3 = $('#techSlide3')
const techSlide4 = $('#techSlide4')
const techSlide5 = $('#techSlide5')
const techSlide6 = $('#techSlide6')
const techSlide7 = $('#techSlide7')
const techSlide8 = $('#techSlide8')
const techSlide9 = $('#techSlide9')

$(document).ready(function () {

    var breakpoint = 767.98;
    // Sets viewScroller
    $('.mainbag').viewScroller({
        useScrollbar: (window.innerWidth <= breakpoint) ? true : false,
        changeWhenAnim: (window.innerWidth <= breakpoint) ? true : false,
        animSpeedMainView: (window.innerWidth <= breakpoint) ? false : 600, // Animation speed of mainviews: 0 - fastest
        animSpeedSubView: (window.innerWidth <= breakpoint) ? false : 700, // Animation speed of subviews: 0 - fastest
        animEffectMainView: 'easeInOutExpo', // Animation effect of mainviews change - jQuery (easing)
        animEffectSubView: 'easeInOutExpo' // Animation effect of subviews change - jQuery (easing) 
    });

    particlesJS.load('particles-js', 'vendor/particle.json', function () {})

    $('.navbar-nav>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //Pagination Slider Technology
    techSlide1.addClass('anchor-active')
    techSlide2.click(() => {
        techSlide1.removeClass('anchor-active')
        techSlide5.addClass('anchor-active')
    })
    techSlide4.click(() => {
        techSlide5.removeClass('anchor-active')
        techSlide1.addClass('anchor-active')
    })
    techSlide6.click(() => {
        techSlide5.removeClass('anchor-active')
        techSlide9.addClass('anchor-active')
    })
    techSlide8.click(() => {
        techSlide8.removeClass('anchor-active')
        techSlide5.addClass('anchor-active')
    })
    techSlide7.click(() => {
        techSlide7.removeClass('anchor-active')
        techSlide1.addClass('anchor-active')
    })
    techSlide3.click(() => {
        techSlide3.removeClass('anchor-active')
        techSlide9.addClass('anchor-active')
    })

    //Pagination Slider OTC Trading
    slide1.addClass('anchor-active')
    slide2.on('click', () => {
        slide1.removeClass('anchor-active')
        slide5.addClass('anchor-active')
    })
    slide4.on('click', () => {
        slide5.removeClass('anchor-active')
        slide1.addClass('anchor-active')
    })
    slide6.on('click', () => {
        slide5.removeClass('anchor-active')
        slide9.addClass('anchor-active')
    })
    slide8.on('click', () => {
        slide8.removeClass('anchor-active')
        slide5.addClass('anchor-active')
    })
    slide7.on('click', () => {
        slide7.removeClass('anchor-active')
        slide1.addClass('anchor-active')
    })
    slide3.on('click', () => {
        slide3.removeClass('anchor-active')
        slide9.addClass('anchor-active')
    })

});

