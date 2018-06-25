# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ProductTemplate(models.Model):
    _inherit = 'product.template'

    x_link = fields.Text(string="Link")
    x_type = fields.Char(string="Type")


class Person(models.Model):
    _inherit = 'res.users'

    x_name_vn = fields.Char(string="Tên")
    x_job = fields.Char(string="Job")
    x_job_vn = fields.Char(string="Nghề nghiệp")
    x_facebook = fields.Char(string="Description")
    x_twitter = fields.Char(string="twitter")
    x_googleplus = fields.Char(string="Googleplus")


class MenuHeader(models.Model):
    _inherit = 'product.public.category'

    x_name_vn = fields.Char(string="Tên")
    x_link = fields.Char(string="Link")


class CustomCompany(models.Model):
    _inherit = 'res.company'

    x_partner_vn = fields.Char(string="Tên")
    x_address = fields.Char(string="Địa chỉ")
    x_description = fields.Text(string="Description")
    x_description_vn = fields.Text(string="Miêu tả")
    x_id = fields.Char(string="ID")
