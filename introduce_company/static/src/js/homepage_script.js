odoo.define("introduce_company.homepage", function (require) {
    'use strict';
    require("web.dom_ready");
    var T_header = $('#oe_main_menu_navbar').length;
    $(window).scroll(function () {
        var height = $(window).scrollTop();

        if (height < 10) {
            $('.header').removeClass('active');
        }
        if (height >= 10) {
            $('.header').addClass('active');
            if (T_header > 0) {
                $('.header.active').css('top', '34px');
                $('.banner').addClass('pTop');
            }else {
                $('.width_header').css('top', '0');
            }
        }
    });

    $('.navbar-toggle-custom').click(function () {
         var menuHeader = $('#menu_main_ul').css('display');
        if(menuHeader === "none"){
            $('#menu_main_ul').css('display','block');
        }else {
            $('#menu_main_ul').css('display','none');
        }

    });

    $('.menu-solution').click(function () {
         var menuHeader = $('.sub-small').css('display');
        if(menuHeader === "none"){
            $('.sub-small').css('display','block');
        }else {
            $('.sub-small').css('display','none');
        }

    });

    $('.menu-item-object-parent').hover(function () {
        $(this).find('.sub-menu').css('display','block');
    },function () {
        $(this).find('.sub-menu').css('display','none');
    });

    var childSub = $('.menu-item-object-child');
    if(childSub.length === 0){
        $('.menu-child').addClass('hidden');
    }
});