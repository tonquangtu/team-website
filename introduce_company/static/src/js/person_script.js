odoo.define('introduce_company.homepage', function (require) {
    'use strict';
    require('web.dom_ready');

// Instantiate the Bootstrap carousel
    addItemCarousel();
    $(window).resize(function () {
        addItemCarousel();
    });

    function addItemCarousel() {
        $('.multi-item-carousel .item').each(function () {
            $(this).children().each(function (i) {
                if (i > 0) {
                    $(this).remove();
                }
            });
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            var width = $(window).innerWidth();
            if (width >= 768 && width < 991) {
                addItem(next, $(this), 1);
            } else if (width >= 991 && width < 1200) {
                addItem(next, $(this), 2);
            } else if (width >= 1200) {
                addItem(next, $(this), 3);
            }
        });
    }

    function addItem(next, $item, num) {
        for (var i = 0; i < num; i++) {
            next = next.next();
            if (!next.length) {
                next = $item.siblings(':first');
            }
            next.children(':first-child').clone().appendTo($item);
        }
    }

});
