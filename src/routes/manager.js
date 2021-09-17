const express = require('express');
const router = express.Router();

const managerControllers = require('../app/controllers/ManagerControllers')

router.use('/players', managerControllers.showListPlayers);


// router.use('/:slug', managerControllers.showDetail);


module.exports = router;