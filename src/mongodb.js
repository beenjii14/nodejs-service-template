const mongoose = require('mongoose');
const config = require('../config');
const { Logger } = require('./utils/');

(async () => {
  try {
    await mongoose.connect(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    Logger.info('Connected to MongoDB 💾');
  } catch (error) {
    Logger.warn('Error connecting to MongoDB', error.message);
  }
})();
