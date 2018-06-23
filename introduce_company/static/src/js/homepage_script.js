odoo.define("introduce_company.homepage", function (require) {
    'use strict';
    require("web.dom_ready");
    var odooHeader = $('#oe_main_menu_navbar').length;
    var menuUl = $('#menu_main_ul');


    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height < 10) {
            $('.header').removeClass('active');
        }

        if (height >= 50) {
            $('.header').addClass('active');
            if (odooHeader > 0) {
                $('.header.active').css('top', '34px');
                $('.banner').addClass('pTop');
            } else {
                $('.width_header').css('top', '0');
            }
        }

        if (height >= 800) {
            //tang tu 1,2,3... đen het
            if (!$(".count-value").hasClass('check-width')) {
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
            $(".count-value").addClass('check-width');
        }
    });

    $('.navbar-toggle-custom').click(function () {
        var menuHeader = menuUl.css('display');
        if (menuHeader === "none") {
            menuUl.css('display', 'block');
        } else {
            menuUl.css('display', 'none');
        }

    });

    $('.menu-solution').click(function () {
        var subSmall = $(this).find('.sub-small');
        var menuSub = subSmall.css('display');
        if (menuSub === "none") {
            subSmall.css('display', 'block');

        } else {
            subSmall.css('display', 'none');
        }

    });

    $('.menu-item-object-parent').hover(function () {
        $(this).find('.sub-menu').css('display', 'block');
    }, function () {
        $(this).find('.sub-menu').css('display', 'none');
    });

    var childSub = $('.menu-item-object-child');
    if (childSub.length === 0) {
        $('.menu-child').addClass('hidden');
    }

    //so sanh text dua ra chi so
    $('.count-title').each(function () {
        var testText = $(this).text();
        if (testText.trim() === "EXPERIENCE") {
            $(this).parent().find('.exp-value').removeClass('hidden');
        }
        else if ((testText.trim() === "CUSTOMER") || (testText.trim() === "PRODUCT")) {
            $(this).parent().find('.product-value').removeClass('hidden');
        }
    });



    $(document).on("scroll", onScroll1);
    //smoothscroll
    $('#menu-item-parent a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('#menu-item-parent a').each(function () {
            $(this).parent().removeClass('active');
        });
        $(this).parent().addClass('active');

        var target = this.hash,
            menu = target;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll1);
        });
    });

     $(document).on("scroll", onScroll2);
    //smoothscroll
    $('.menu-solution a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.menu-solution a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll2);
        });
    });
});

function onScroll1(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-item-parent a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-item-parent a').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });
}

function onScroll2(event){
    var scrollPos2 = $(document).scrollTop();
    $('.menu-solution a').each(function () {
        var currLink2 = $(this);
        var refElement2 = $(currLink2.attr("href"));
        if(refElement2.position()){
        if (refElement2.position().top <= scrollPos2 && refElement2.position().top + refElement2.height() > scrollPos2) {
            $('.menu-solution a').removeClass("active");
            currLink2.addClass("active");
        }
        else{
            currLink2.removeClass("active");
        }
        }
    });
}