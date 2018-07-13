# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


class ContactUs(http.Controller):
    @http.route('/contact-us', auth='public')
    def index(self, **kw):
        contact = request.env['source_lead_website.contact_us'].sudo().search([])
        return http.request.render('source_lead_website.contact_left_bottom', {
            'contact': contact,
        })
