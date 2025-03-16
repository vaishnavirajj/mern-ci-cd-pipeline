const asyncHandler = require('express-async-handler');
const Item = require('../models/item');

// @desc    Get all items
// @route   GET /api/items
// @access  Public
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({});
  res.json(items);
});

module.exports = {
  getItems,
};