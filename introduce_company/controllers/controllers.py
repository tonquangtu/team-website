# -*- coding: utf-8 -*-
from odoo import http

# class IntroduceCompany(http.Controller):
#     @http.route('/introduce_company/introduce_company/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/introduce_company/introduce_company/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('introduce_company.listing', {
#             'root': '/introduce_company/introduce_company',
#             'objects': http.request.env['introduce_company.introduce_company'].search([]),
#         })

#     @http.route('/introduce_company/introduce_company/objects/<model("introduce_company.introduce_company"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('introduce_company.object', {
#             'object': obj
#         })