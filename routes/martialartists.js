const router = require('express').Router();
const { MartialArtist, Dojo } = require('../db/index.js');
const rivalsPage = require('../client/rivals.js');
const martialartistPage = require('../client/martistRoster.js')


// returning sequelizedatabaseerrir: invalid input syntax for type integer: "martialartists"
router.get('/', async (req, res, next) => {
  try {
    const roster = await MartialArtist.findAll({
      include: [Dojo]
    })
    res.send( martialartistPage(roster) )
  }
catch (error) {
  next(error);
}
})


router.get('/:id', async (req, res, next) => {
  try {
    const martialArtists = await MartialArtist.findRivals(req.params.id);
    res.send(rivalsPage(martialArtists));
  }
catch (error) {
  next(error);
}
})

module.exports = router;
