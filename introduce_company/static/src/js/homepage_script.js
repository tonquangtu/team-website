odoo.define("introduce_company.homepage", function (require) {
    'use strict';
    require("web.dom_ready");

    var odooHeader = $('#oe_main_menu_navbar').length;
    var menuUl = $('#menu_main_ul');
    var $menuSoluA = $('.menu-solution a');
    var $menuParent = $('#menu-item-parent a');
    if (odooHeader <= 0) {
        $('.menu_main').css('margin-top', '-34px');
    }

    $(window).scroll(function () {
        var header = $('.header');
        var height = $(window).scrollTop();
        if (height < 10) {
            header.removeClass('active');
        }

        if (height >= 50) {
            header.addClass('active');
            if (odooHeader > 0) {
                $('.header.active').css('top', '34px');
                $('.banner').addClass('pTop');
            } else {
                $('.width_header').css('top', '0');
            }
        }

        if (height >= 800) {
            //tang tu 1,2,3... đen het
            var $countValue = $(".count-value");
            if (!$countValue.hasClass('check-width')) {
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
            $countValue.addClass('check-width');
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

    //experience and parameter
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
    $menuParent.on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $menuParent.each(function () {
            $(this).parent().removeClass('active');
        });
        $(this).parent().addClass('active');

        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll1);
        });
    });

    $(document).on("scroll", onScroll2);
    //smoothscroll
    $menuSoluA.on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $menuSoluA.each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll2);
        });
    });

    // Change the interface language
    var lang = getCookie("lang");
    if (lang) {
        //cookie language was set to "vi" and URL does not contain "vi"
        if (lang.include("vi") && !(document.URL.includes("vi"))) {
            window.location.href = '/vi/';
        } else if (lang.include("en") && !(document.URL.includes("en"))) {
            window.location.href = '/en/';
        }
    }
    else {
        var userLang = navigator.language;
        if (userLang.includes('vi') && !(document.URL.includes("vi")))
            window.location.href = '/vi/';
    }
});

// functions to help manipulating cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function onScroll1() {
    var scrollPos = $(document).scrollTop();
    var $menuParent = $('#menu-item-parent a');
    $menuParent.each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $menuParent.removeClass("active");
            currLink.parent().addClass("active");
        }
        else {
            currLink.parent().removeClass("active");
        }
    });
}

function onScroll2() {
    var scrollPos = $(document).scrollTop();
    var $menuSoluA = $('.menu-solution a');
    $menuSoluA.each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position()) {
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $menuSoluA.removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        }
    });
}

