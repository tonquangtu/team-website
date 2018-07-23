# -*- coding: utf-8 -*-

from odoo import models, fields


class Experience(models.Model):
    _name = 'introduce.experience'

    name = fields.Char(string="name")
    name_vn = fields.Char(string="Tên")
    description = fields.Char(string="description")
