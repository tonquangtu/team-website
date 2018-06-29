# -*- coding: utf-8 -*-

from odoo.addons.website.controllers.main import Website

from odoo import http
from odoo.http import request


def get_home_info():
    product = request.env['product.template'].sudo().search([('x_type', '=', 'complete_product')])
    solution = request.env['product.template'].sudo().search([('x_type', '=', 'solution')])
    customer = request.env['product.template'].sudo().search([('x_type', '=', 'customer')])
    user = request.env['res.users'].sudo().search([('company_ids', '=', 'team')])
    experience = request.env['introduce.experience'].sudo().search([])
    teams = request.env['res.company'].sudo().search([('x_id', '=', '1')])
    odoos = request.env['res.company'].sudo().search([('x_id', '=', '2')])
    menu_parent = request.env['product.public.category'].sudo().search([('parent_id', '=', False)])

    if len(teams) > 0:
        team = teams[0]

    if len(odoos) > 0:
        odoo = odoos[0]

    menu_customs = []
    for item in menu_parent:
        menu_item = {
            "parent": item,
            "childs": request.env['product.public.category'].search([('parent_id', '=', item.id)])
        }
        menu_customs.append(menu_item)

    return {
        'menu': menu_customs,
        'odoo': odoo,
        'team': team,
        'experience': experience,
        'user': user,
        'product': product,
        'customer': customer,
        'solution': solution,
    }


class Homepage(Website):
    @http.route('/', type='http', auth="public", website=True)
    def homepage(self, **kw):
        return http.request.render('introduce_company.homepage')

    @http.route('/get-homepage', type='json', auth='public', method='POST', website=True)
    def get_homepage(self, is_vi=False):
        info = get_home_info()
        info.update({'vi': is_vi})
        data = request.env['ir.ui.view'].render_template('introduce_company.main_homepage', info)
        return data

