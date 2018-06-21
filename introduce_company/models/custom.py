# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ProductTemplate(models.Model):
    _inherit = 'product.template'

    x_link = fields.Text(string="Link")
    x_type = fields.Char(string="Type")


class Person(models.Model):
    _inherit = 'res.users'

    x_job = fields.Text(string="Job")
    x_facebook = fields.Char(string="Description")
    x_twitter = fields.Char(string="twitter")
    x_googleplus = fields.Char(string="Googleplus")


class MenuHeader(models.Model):
    _inherit = 'product.public.category'

    x_link = fields.Char(string="Link")
