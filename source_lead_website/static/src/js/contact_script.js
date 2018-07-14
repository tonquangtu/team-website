odoo.define('source_lead_website.contact', function (require) {
    'use strict';
    var ajax = require('web.ajax');
    require("web.dom_ready");
    var $formControl = $('#form_contact');
    $('.contact-header').click(function () {
        if ($formControl.hasClass('collect')) {
            $formControl.removeClass('collect');
        } else {
            $formControl.addClass('collect');
        }
    });

    var $envelope = $('.envelope');
    $envelope.hover(function () {
        if ($envelope.hasClass('collect-envelope')) {
            $envelope.removeClass('collect-envelope');
        } else {
            $envelope.addClass('collect-envelope');
        }
    });

    var $modalForm = $('#modal-form');
    $envelope.click(function () {
        $modalForm.modal('toggle');
    });
    $('#close_modal').click(function () {
        $modalForm.modal('toggle');
    });

    //form question ajax
    $('#btn_send').click(function () {
        var name = $('#contact_name').val();
        var phone = $('#contact_phone').val();
        var address = $('#contact_address').val();
        var email = $('#contact_email').val();
        var question = $('#contact_question').val();
        var checkemail = checkEmail(email, "question");
        var checkphone = phonenumber(phone);
        ajax.jsonRpc('/handling-form', 'call', {
            'kwargs': {
                'name': name,
                'phone': phone,
                'address': address,
                'email': email,
                'question': question,
                'checkemail': checkemail,
                'checkphone': checkphone
            }
        }).then(function (data) {
            if (data) {
                if (data['emailerror']) {
                   $("#contact_email").addClass('error-question');
                }else {
                    $("#contact_email").removeClass('error-question');
                }
                if(data['phoneerror']){
                    $('#contact_phone').addClass('error-question');
                }else {
                    $("#contact_phone").removeClass('error-question');
                }
                if(data['success']){
                    // turn off modal question turn on modal success
                    var $modalSuccess = $('#modal-success');
                    $modalForm.modal('toggle');
                    $modalSuccess.modal('toggle');
                }
            }
        });
    });
});

//check email
function checkEmail(inputtxt, type) {
    var filter = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (filter.test(inputtxt)) {
        return true;
    } else {
        return false;
    }
}

//check phone-number
function phonenumber(inputtxt) {
    var phonenu = /^([(]?)?([+]?)?([0-9]{1,2})?([)]?)?([0-9]{9,10})$/;
    if (inputtxt.match(phonenu)) {
        return true;
    }
    else {
        return false;
    }
}

