const router = require('express').Router();
const { MartialArtist, Dojo } = require('../db/index.js');
const joinPage = require('../client/joinPage.js');
const html = require('html-template-tag');

// attempting to create a Join Now page... currently running into an error on the joinPage.js saying that my dojoList is undefined
router.get('/', async (req, res, next) => {
  try {
    const dojosToJoin = await Dojo.findAll({
      include: [ {
        model: MartialArtist,
        as: 'members'
      }]
  })
  console.log(dojosToJoin)
   res.send(joinPage(dojosToJoin));
  }
  catch (error) {
    next(error);
  }
})


// how can I add a new member to a dojo?
router.post('/', async (req, res, next) => {
  try {
    const { name, DojoId } = await MartialArtist.create( req.body
      // where: {
      //   name: req.body.name,
      //   DojoId: req.body.dojo
      // }
  )
    res.send(joinPage());
    res.redirect(`/dojos/${DojoId}`)
  }
  catch (error) {
    next(error);
  }
})



module.exports = router;
