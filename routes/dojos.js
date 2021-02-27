const router = require('express').Router();
const { MartialArtist, Dojo } = require('../db/index.js');

router.get('/', async (req, res, next) => {
  try {
    res.send(await Dojo.findAll({
      include: [ {
        model: MartialArtist,
        as: 'members'
      }
      ]
    }));
  }
  catch (error) {
    next(error);
  }
})

module.exports = router;
