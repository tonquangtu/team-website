odoo.define("introduce_company.homepage", function (require) {
    'use strict';
    require("web.dom_ready");
    var T_header = $('#oe_main_menu_navbar').length;
    var subSmall = $('.sub-small');
    var menuUl = $('#menu_main_ul');


    $(window).scroll(function () {
        var height = $(window).scrollTop();
        console.log("mot hai ba");
        console.log(height);

        if (height < 10) {
            $('.header').removeClass('active');
        }

        if (height >= 10) {
            $('.header').addClass('active');
            if (T_header > 0) {
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
        var menuHeader = subSmall.css('display');
        if (menuHeader === "none") {
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


});