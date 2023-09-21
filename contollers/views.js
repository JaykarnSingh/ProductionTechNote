// controller.js

const model = require('../models/views');

const showViewCount = async (req, res) => {
  try {
    const viewCount = await model.getViewCount();
    res.json({ viewCount });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const incrementViewCount = async (req, res) => {
  try {
    const viewCount = await model.incrementViewCount();
    res.json({ viewCount });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { showViewCount, incrementViewCount };
