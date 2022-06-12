const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('./zookeepersRoutes');

router.use(animalRoutes);
router.use(require('./zookeepersRoutes'));


module.exports = router;