import $ from 'jquery'
import anime from 'animejs'
import * as bootstrap from 'bootstrap'

// Пространство имен для подписки и отписки события
const NAME_SPACE = '.scroll'

export const scrolling = function () {
    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click' + NAME_SPACE, function () {
        if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
            && window.location.hostname === this.hostname) {
            let target = $(this.hash)
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                })
                return false
            }
        }
    })

    const collapseMenu = new bootstrap.Collapse($('.navbar-collapse'), {
        toggle: false
    })
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').on('click' + NAME_SPACE, function () {
        // Скрываем меню
        collapseMenu.hide()
        /* if bootstrap 4.6.0
        $('.navbar-collapse').collapse('hide')*/
    })

    // Activate scrollspy to add active class to navbar items on scroll
    /* if bootstrap 4.6.0
    $('body').scrollspy({
        target: '#mainNav',
        offset: 74
    })*/
    new bootstrap.ScrollSpy($('body'), {
        target: '#mainNav',
        offset: 74
    })

    // Collapse Navbar
    const navbarCollapse = function () {
        const mainNav = $('#mainNav')
        if (mainNav.offset().top > 100) {
            mainNav.addClass('navbar-shrink')
        } else {
            mainNav.removeClass('navbar-shrink')
        }
    }
    // Collapse now if page is not at top
    navbarCollapse()
    // Collapse the navbar when page is scrolled
    $(window).on('scroll' + NAME_SPACE, navbarCollapse, undefined)
}

export const unScrolling = function () {
    // Удаляем обработчики из пространства имён NAME_SPACE
    $(window).off(NAME_SPACE)
}