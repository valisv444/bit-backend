const express = require('express');
const router = express.Router();
const subscriberController = require('../controller/subscribercontroller');

router.post('/', subscriberController.createSubscriber);
router.get('/', subscriberController.getSubscribers);
router.delete('/:id', subscriberController.deleteSubscriber);  
router.put('/:id', subscriberController.updateSubscriber);     

module.exports = router;


