# -*- coding: utf-8 -*-

from odoo import models, fields, api
from website_introduce.source_lead_website.untils.until import Until


class Question(models.Model):
    _name = 'source_lead_website.contact_us'

    name = fields.Char(string="Name")
    phone = fields.Char(string='Phone')
    email = fields.Char(string='Email')
    address = fields.Char(string='Address')
    question = fields.Text(string='Question')
    status = fields.Selection(selection=[('wait', 'Wait'), ('in_progress', 'In Progress'), ('done', 'Done')],
                              copy=False, index=True, track_visibility='onchange', default='wait', readonly=True)

    @api.multi
    def action_confirm(self):
        """ change status wait => in_progress"""
        self.ensure_one()
        if self.status == 'wait':
            self.status = 'in_progress'

    @api.multi
    def action_done(self):
        """ change status in_progress => done"""
        self.ensure_one()
        if self.status == 'in_progress':
            self.status = 'done'


# class EmailConfig(models.TransientModel):
#     _inherit = 'res.config.settings'
#     _name = 'source_lead_website.email.config'
#
#     showName = fields.Boolean(string="Show Name")
#     showPhone = fields.Boolean(string="Show Phone")
#     showEmail = fields.Boolean(string="Show Email")
#     showAddress = fields.Boolean(string="Show Address")
#     showQuestion = fields.Boolean(string="Show Question")
#
#     @api.model
#     def get_values(self):
#         res = super(EmailConfig, self).get_values()
#         res.update(
#             showName=Until.convert_boolean_string((self.env['ir.config_parameter'].sudo().get_param('email.config.showName', default=False))),
#             showPhone=Until.convert_boolean_string((self.env['ir.config_parameter'].sudo().get_param('email.config.showPhone', default=False))),
#             showEmail=Until.convert_boolean_string((self.env['ir.config_parameter'].sudo().get_param('email.config.showEmail', default=False))),
#             showAddress=Until.convert_boolean_string((self.env['ir.config_parameter'].sudo().get_param('email.config.showAddress', default=False))),
#             showQuestion=Until.convert_boolean_string((self.env['ir.config_parameter'].sudo().get_param('email.config.showQuestion', default=False)))
#         )
#         return res
#
#     @api.multi
#     def set_values(self):
#         super(EmailConfig, self).set_values()
#         self.env['ir.config_parameter'].sudo().set_param('email.config.showName', self.showName)
#         self.env['ir.config_parameter'].sudo().set_param('email.config.showPhone', self.showPhone)
#         self.env['ir.config_parameter'].sudo().set_param('email.config.showEmail', self.showEmail)
#         self.env['ir.config_parameter'].sudo().set_param('email.config.showAddress', self.showAddress)
#         self.env['ir.config_parameter'].sudo().set_param('email.config.showQuestion', self.showQuestion)


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'
    _name = 'onesignal.config'
    activate_onesignal= fields.Boolean(string='OneSignal Notifications', default=True)

    @api.model
    def get_values(self):
        res = super(ResConfigSettings, self).get_values()
        # ICPSudo = self.env['ir.config_parameter'].sudo()
        res_string = self.env['ir.config_parameter'].sudo().get_param('website_vuabia.activate_onesignal', default=True)
        if res_string == 'True':
            res.update(
                activate_onesignal=True
            )
        else:
            res.update(
                activate_onesignal=False
            )
        return res

    @api.multi
    def set_values(self):
        super(ResConfigSettings, self).set_values()
        # ICPSudo = self.env['ir.config_parameter'].sudo()
        if self.activate_onesignal:
            self.env['ir.config_parameter'].sudo().set_param('website_vuabia.activate_onesignal', 'True')
        else:
            self.env['ir.config_parameter'].sudo().set_param('website_vuabia.activate_onesignal', 'False')