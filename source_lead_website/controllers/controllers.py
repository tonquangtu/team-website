# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


def get_show():
    show_name = request.env['ir.config_parameter'].sudo().get_param('email_config.isShowName')
    show_phone = request.env['ir.config_parameter'].sudo().get_param('email_config.isShowPhone')
    show_email = request.env['ir.config_parameter'].sudo().get_param('email_config.isShowEmail')
    show_address = request.env['ir.config_parameter'].sudo().get_param('email_config.isShowAddress')
    show_question = request.env['ir.config_parameter'].sudo().get_param('email_config.isShowQuestion')
    return {
        'showname': show_name,
        'showphone': show_phone,
        'showemail': show_email,
        'showaddress': show_address,
        'showquestion': show_question,
    }


class ContactUs(http.Controller):
    @http.route('/contact-us', auth='public', website=True)
    def index(self, **kw):
        contact = request.env['source_lead_website.contact_us'].sudo().search([])
        get_show().update({
            'contact': contact,
        })
        return http.request.render('source_lead_website.contact_bottom', get_show())


class ContactMid(http.Controller):
    @http.route('/contact-mid', auth='public', website=True)
    def index(self, **kw):
        contact = request.env['source_lead_website.contact_us'].sudo().search([])
        get_show().update({
            'contact': contact,
        })
        return http.request.render('source_lead_website.contact_vertical', get_show())

    @http.route('/handling-form', website=True, type='json', auth='public', methods=['POST'])
    def create_question(self, **kw):
        vals = {
            'name': kw['kwargs']['name'],
            'phone': kw['kwargs']['phone'],
            'address': kw['kwargs']['address'],
            'email': kw['kwargs']['email'],
            'question': kw['kwargs']['question'],
            'checkemail': kw['kwargs']['checkemail'],
            'checkphone': kw['kwargs']['checkphone'],
        }
        check_email = request.env['ir.config_parameter'].sudo().get_param('email_config.isCheckEmail')
        check_phone = request.env['ir.config_parameter'].sudo().get_param('email_config.isCheckPhone')
        if check_email:
            if vals['checkemail']:
                emailTrue = True
            else:
                return {
                    'emailerror': 1
                }
        else:
            emailTrue = True
        if check_phone:
            if vals['checkphone']:
                phoneTrue = True
            else:
                return {
                    'phoneerror':1
                }
        else:
            phoneTrue = True

        if emailTrue & phoneTrue:
            check = request.env['source_lead_website.contact_us'].sudo().create(vals)
            return {
                'success': 1
            }
        else:
            return {
                'success': 0
            }