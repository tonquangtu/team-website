
odoo.define('source_lead_website.sdfasd', function (require) {
    'use strict';
    require("web.dom_ready");

    alert("hello");
    $('.contact-header').click(function () {
        $('.form_contact').addClass('collect');
    }, function () {
        $('.form_contact').removeClass('collect');
    });
});

