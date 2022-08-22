const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Item = require('../models/Item');

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const items = await Item.getAll(req.user.id);
      res.json(items);
    } catch (e) {
      next(e);
    }
  })
;

// TO DO - implement items CRUD
