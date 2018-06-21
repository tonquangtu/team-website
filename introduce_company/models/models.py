# -*- coding: utf-8 -*-

from odoo import models, fields, api


class CustomCompany(models.Model):
    _inherit = 'res.company'

    x_description = fields.Text()
    x_id = fields.Char(string="ID")
#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)

#
#     @api.depends('value')
#     def _value_pc(self):
#         self.value2 = float(self.value) / 100