const logger = require('../services/logger.service')

async function requireAuth(req, res, next) { }

async function requireAdmin(req, res, next) { }

module.exports = {
  requireAuth,
  requireAdmin
}
