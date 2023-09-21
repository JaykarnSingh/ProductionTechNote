// model.js

const mongoose = require('mongoose');

const viewCountSchema = new mongoose.Schema({
  _id: { type: String, default: 'viewCounter' },
  count: { type: Number, default: 0 },
});

const ViewCount = mongoose.model('ViewCount', viewCountSchema);

const getViewCount = async () => {
  try {
    const document = await ViewCount.findOne({ _id: 'viewCounter' });
    if (document) {
      return document.count;
    } else {
      // If the document does not exist, create it with the initial count
      const newDocument = new ViewCount();
      await newDocument.save();
      return newDocument.count;
    }
  } catch (error) {
    console.error('Error fetching view count from the database', error);
    throw error;
  }
};

const incrementViewCount = async () => {
  try {
    const updateResult = await ViewCount.findOneAndUpdate({ _id: 'viewCounter' }, { $inc: { count: 1 } }, { new: true, upsert: true });
    return updateResult.count;
  } catch (error) {
    console.error('Error updating view count in the database', error);
    throw error;
  }
};

module.exports = { getViewCount, incrementViewCount };
