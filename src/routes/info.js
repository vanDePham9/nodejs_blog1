const express = require('express');
const router = express.Router();

const infoControllers = require('../app/controllers/InfoControllers')

router.use('/create', infoControllers.create);
router.use('/store', infoControllers.store);
router.use('/:id/update', infoControllers.update);
router.put('/:id', infoControllers.updateInDb);
router.use('/:slug', infoControllers.showDetail);


module.exports = router;