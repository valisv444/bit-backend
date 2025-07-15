const express = require('express');
const router = express.Router();
const {
  createSubscriber,
  getSubscribers
} = require('../controller/subscribercontroller');

router.post('/subscribers', createSubscriber);

router.get('/subscribers', getSubscribers);

module.exports = router;
