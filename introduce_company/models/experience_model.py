# -*- coding: utf-8 -*-

from odoo import models, fields, api


class Experience(models.Model):
    _name = 'introduce.experience'

    name = fields.Char(string="name")
    description = fields.Char(string="description")
