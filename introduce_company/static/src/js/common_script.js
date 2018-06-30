odoo.define("introduce_company.homepage", function (require) {
    'use strict';
    require("web.dom_ready");
    var ajax = require('web.ajax');

    var url = window.location.href;
    var is_vi = false;
    if (url.indexOf('vi_VN') !== -1) {
        is_vi = true;
    }

    ajax.jsonRpc('/get-homepage', 'call', {
        'is_vi': is_vi
    }).then(function (data) {
        $('#homepage').append(data);
    });

});