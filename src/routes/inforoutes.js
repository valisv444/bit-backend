const express = require('express');
const router = express.Router();
const infoController = require('../controller/infocontroller');

router.post('/', infoController.createInfo);

router.get('/', infoController.getInfo);

router.get('/:id', infoController.getInfoById);

router.put('/:id', infoController.updateInfo);

router.delete('/:id', infoController.deleteInfo);

module.exports = router;
