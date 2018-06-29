odoo.define('introduce_company.snippet_banner', function (require) {
    'use strict';
    var options = require('web_editor.snippets.options');

    options.registry.snippet_banner_options = options.Class.extend({
        start: function () {
            var url = window.location.href;
            var is_vi = false;
            if (url.indexOf('vi_VN') !== -1) {
                is_vi = true;
            }
            if (is_vi) {
                alert('fuck');
            }
        }
    });
});